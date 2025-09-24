const profileForm = document.getElementById('profileForm');
const cancelBtn = document.getElementById('cancelBtn');

const namePreview = document.getElementById('namePreview');
const emailPreview = document.getElementById('emailPreview');
const studentIdPreview = document.getElementById('studentIdPreview');
const avatarPreview = document.getElementById('avatarPreview');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const studentId = document.getElementById('studentId');
const semester = document.getElementById('semester');
const major = document.getElementById('major');
const dateOfBirth = document.getElementById('dateOfBirth');
const address = document.getElementById('address');
const bio = document.getElementById('bio');


document.addEventListener('DOMContentLoaded', function() {
    loadProfileData();
    setupEventListeners();
    updateLivePreview();
});

function loadProfileData() {
    if (typeof studentInfo !== 'undefined') {
        firstName.value = studentInfo.name || '';
        email.value = studentInfo.email || '';
        studentId.value = studentInfo.studentId || '';
        semester.value = studentInfo.semester || 'Fall 2024';
        major.value = studentInfo.major || '';
        
        updateLivePreview();
    }
}

function setupEventListeners() {
    profileForm.addEventListener('submit', handleFormSubmit);
    
    cancelBtn.addEventListener('click', resetForm);
    
    const previewFields = [firstName, lastName, email, studentId];
    previewFields.forEach(field => {
        field.addEventListener('input', updateLivePreview);
    });
    
    
    const avatarOverlay = document.querySelector('.avatar-overlay');
    if (avatarOverlay) {
        avatarOverlay.addEventListener('click', handleAvatarUpload);
    }
    
    const navToggle = document.getElementById('navToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('open');
        });
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('open');
        });
    }
    
    const formInputs = profileForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const submitBtn = profileForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Saving...';
    
    setTimeout(() => {
        if (typeof studentInfo !== 'undefined') {
            studentInfo.name = firstName.value;
            studentInfo.email = email.value;
            studentInfo.studentId = studentId.value;
            studentInfo.semester = semester.value;
            studentInfo.major = major.value;
        }
        
        updateLivePreview();
        
        showSuccessMessage('Profile updated successfully!');
        
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
        
        saveToLocalStorage();
        
    }, 1500);
}

function validateForm() {
    let isValid = true;
    
    clearAllErrors();
    
    const requiredFields = [
        { field: firstName, message: 'First name is required' },
        { field: email, message: 'Email is required' },
        { field: major, message: 'Major is required' }
    ];
    
    requiredFields.forEach(({ field, message }) => {
        if (!field.value.trim()) {
            showFieldError(field, message);
            isValid = false;
        }
    });
    
    if (email.value && !isValidEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    if (phone.value && !isValidPhone(phone.value)) {
        showFieldError(phone, 'Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    
    clearFieldError(event);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return;
    }
    
    if (field.type === 'tel' && value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
        return;
    }
}

function clearFieldError(event) {
    const field = event.target;
    const formGroup = field.closest('.form-group');
    formGroup.classList.remove('error');
}

function clearAllErrors() {
    const errorGroups = profileForm.querySelectorAll('.form-group.error');
    errorGroups.forEach(group => group.classList.remove('error'));
}

function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.add('error');
    
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function updateLivePreview() {
    const fullName = `${firstName.value} ${lastName.value}`.trim();
    namePreview.textContent = fullName || 'Student Name';
    emailPreview.textContent = email.value || 'email@example.com';
    studentIdPreview.textContent = `Student ID: ${studentId.value || 'STU001'}`;
}

function resetForm() {
    loadProfileData();
    clearAllErrors();
    showSuccessMessage('Form reset to original values');
}


function handleAvatarUpload() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatarPreview.src = e.target.result;
                showSuccessMessage('Avatar updated successfully!');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function showSuccessMessage(message) {
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message show';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    const formContainer = document.querySelector('.form-container');
    formContainer.insertBefore(successMessage, formContainer.firstChild);
    
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.parentNode.removeChild(successMessage);
            }
        }, 300);
    }, 3000);
}

function saveToLocalStorage() {
    const profileData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        semester: semester.value,
        major: major.value,
        dateOfBirth: dateOfBirth.value,
        address: address.value,
        bio: bio.value
    };
    
    localStorage.setItem('profileData', JSON.stringify(profileData));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
        try {
            const profileData = JSON.parse(savedData);
            
            Object.keys(profileData).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    element.value = profileData[key] || '';
                }
            });
            
            updateLivePreview();
        } catch (error) {
            console.error('Error loading profile data:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
});

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

window.profileManager = {
    updateLivePreview,
    validateForm,
    saveToLocalStorage,
    loadFromLocalStorage,
    showSuccessMessage
};

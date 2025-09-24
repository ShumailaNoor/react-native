let filteredCourses = [...courses];
let currentView = 'grid';

document.addEventListener('DOMContentLoaded', function() {
    initializeCoursesPage();
    setupEventListeners();
});

function initializeCoursesPage() {
    updateStatistics();
    displayCourses(courses);
    setupNavigation();
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    document.getElementById('gradeFilter').addEventListener('change', handleFilters);
    document.getElementById('progressFilter').addEventListener('change', handleFilters);
    document.getElementById('sortBy').addEventListener('change', handleFilters);
    
    document.getElementById('gridView').addEventListener('click', () => switchView('grid'));
    document.getElementById('listView').addEventListener('click', () => switchView('list'));
}

function updateStatistics() {
    document.getElementById('totalCoursesCount').textContent = courses.length;
    
    const avgProgress = Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length);
    document.getElementById('averageProgress').textContent = avgProgress + '%';
    
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = totalCredits;
    
    const avgGPA = calculateGPA(courses);
    document.getElementById('averageGPA').textContent = avgGPA;
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    applyFiltersAndSearch();
}

function handleFilters() {
    applyFiltersAndSearch();
}

function applyFiltersAndSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const gradeFilter = document.getElementById('gradeFilter').value;
    const progressFilter = document.getElementById('progressFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    
    let filtered = [...courses];
    
    if (searchTerm) {
        filtered = filtered.filter(course => 
            course.name.toLowerCase().includes(searchTerm) ||
            course.instructor.toLowerCase().includes(searchTerm)
        );
    }
    
    if (gradeFilter) {
        filtered = filtered.filter(course => course.grade.startsWith(gradeFilter));
    }
    
    if (progressFilter) {
        switch (progressFilter) {
            case 'high':
                filtered = filtered.filter(course => course.progress >= 80);
                break;
            case 'medium':
                filtered = filtered.filter(course => course.progress >= 50 && course.progress < 80);
                break;
            case 'low':
                filtered = filtered.filter(course => course.progress < 50);
                break;
        }
    }
    
    filtered = sortCourses(filtered, sortBy);
    
    filteredCourses = filtered;
    displayCourses(filtered);
}

function sortCourses(courseList, sortBy) {
    const sorted = [...courseList];
    
    switch (sortBy) {
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'progress':
            return sorted.sort((a, b) => b.progress - a.progress);
        case 'grade':
            return sorted.sort((a, b) => {
                const gradeOrder = { 'A+': 12, 'A': 11, 'A-': 10, 'B+': 9, 'B': 8, 'B-': 7, 'C+': 6, 'C': 5, 'C-': 4, 'D+': 3, 'D': 2, 'F': 1 };
                return (gradeOrder[b.grade] || 0) - (gradeOrder[a.grade] || 0);
            });
        case 'instructor':
            return sorted.sort((a, b) => a.instructor.localeCompare(b.instructor));
        default:
            return sorted;
    }
}

function displayCourses(courseList) {
    const container = document.getElementById('coursesContainer');
    const noResults = document.getElementById('noResults');
    const displayedCount = document.getElementById('displayedCount');
    
    displayedCount.textContent = `(${courseList.length})`;
    
    if (courseList.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    container.innerHTML = '';
    
    courseList.forEach(course => {
        const courseCard = createCourseCard(course);
        container.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-course-id', course.id);
    
    const progressColor = getProgressColor(course.progress);
    const gradeColor = getGradeColor(course.grade);
    
    card.innerHTML = `
        <div class="course-header">
            <div class="course-info">
                <h3 class="course-title">${course.name}</h3>
                <p class="course-instructor">
                   <i class="fa-solid fa-chalkboard-user"></i> ${course.instructor}</p>
            </div>
            <div class="course-grade" style="background: ${gradeColor}; color: white;">
                ${course.grade}
            </div>
        </div>
        
        <div class="course-details">
            <div class="detail-item">
                <span class="detail-icon"><i class="fas fa-book"></i></span>
                <span>${course.credits} Credits</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon"><i class="fa-regular fa-clock"></i></span>
                <span>${course.schedule}</span>
            </div>
        </div>
        
        <div class="progress-section">
            <div class="progress-header">
                <span class="progress-label">Course Progress</span>
                <span class="progress-percentage">${course.progress}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${course.progress}%; background: ${progressColor};"></div>
            </div>
        </div>
        
        <div class="course-actions">
            <button class="action-btn btn-primary" onclick="viewCourseDetails(${course.id})">
                View Details
            </button>
            <button class="action-btn btn-secondary" onclick="viewAssignments(${course.id})">
                Assignments
            </button>
        </div>
    `;
    
    return card;
}

function getProgressColor(progress) {
    if (progress >= 80) return 'linear-gradient(90deg, #27ae60, #2ecc71)';
    if (progress >= 60) return 'linear-gradient(90deg, #f39c12, #e67e22)';
    if (progress >= 40) return 'linear-gradient(90deg, #e74c3c, #c0392b)';
    return 'linear-gradient(90deg, #95a5a6, #7f8c8d)';
}

function switchView(view) {
    currentView = view;
    const container = document.getElementById('coursesContainer');
    const gridBtn = document.getElementById('gridView');
    const listBtn = document.getElementById('listView');
    
    if (view === 'list') {
        container.classList.add('list-view');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    } else {
        container.classList.remove('list-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    }
    
    displayCourses(filteredCourses);
}

function viewCourseDetails(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        alert(`Viewing details for ${course.name}\n\nInstructor: ${course.instructor}\nCredits: ${course.credits}\nSchedule: ${course.schedule}\nGrade: ${course.grade}\nProgress: ${course.progress}%`);
    }
}

function viewAssignments(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        const courseAssignments = assignments.filter(a => a.course === course.name);
        window.location.href = `assignments.html?course=${courseId}`;
    }
}

function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = navToggle && navToggle.contains(event.target);
        const isClickOnMobileBtn = mobileMenuBtn && mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggle && !isClickOnMobileBtn && window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });
}
const assignmentsBody = document.getElementById('assignmentsBody');
const assignmentsTable = document.getElementById('assignmentsTable');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const courseFilter = document.getElementById('courseFilter');
const sortBy = document.getElementById('sortBy');
const currentDateElement = document.getElementById('currentDate');
const displayedCount = document.getElementById('displayedCount');
const noResults = document.getElementById('noResults');
const pendingCount = document.getElementById('pendingCount');
const submittedCount = document.getElementById('submittedCount');
const overdueCount = document.getElementById('overdueCount');


let filteredAssignments = [...assignments];


document.addEventListener('DOMContentLoaded', function() {
    updateCurrentDate();
    populateCourseFilter();
    renderAssignments();
    updateStats();
    setupEventListeners();
});

function updateCurrentDate() {
    if (!currentDateElement) return;
    const today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    currentDateElement.textContent = today.toLocaleDateString('en-US', options);
}

function populateCourseFilter() {
    const uniqueCourses = [...new Set(assignments.map(assignment => assignment.course))];
    
    uniqueCourses.forEach(course => {
        const option = document.createElement('option');
        option.value = course;
        option.textContent = course;
        courseFilter.appendChild(option);
    });
}

function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    statusFilter.addEventListener('change', applyFilters);
    courseFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);
    
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
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredAssignments = assignments.filter(assignment => 
        assignment.title.toLowerCase().includes(searchTerm) ||
        assignment.course.toLowerCase().includes(searchTerm) ||
        (assignment.description && assignment.description.toLowerCase().includes(searchTerm))
    );
    
    applyFilters();
}

function applyFilters() {
    const statusValue = statusFilter.value;
    const courseValue = courseFilter.value;
    const sortValue = sortBy.value;
    
    let filtered = [...filteredAssignments];
    
    if (statusValue !== 'all') {
        filtered = filtered.filter(assignment => assignment.status === statusValue);
    }
    
    if (courseValue !== 'all') {
        filtered = filtered.filter(assignment => assignment.course === courseValue);
    }
    
    filtered.sort((a, b) => {
        switch (sortValue) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'course':
                return a.course.localeCompare(b.course);
            case 'status':
                return a.status.localeCompare(b.status);
            case 'dueDate':
            default:
                return new Date(a.dueDate) - new Date(b.dueDate);
        }
    });
    
    renderAssignments(filtered);
    updateStats();
}

function renderAssignments(assignmentsToRender = filteredAssignments) {
    displayedCount.textContent = `(${assignmentsToRender.length})`;
    
    if (assignmentsToRender.length === 0) {
        assignmentsTable.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    assignmentsTable.style.display = 'table';
    noResults.style.display = 'none';
    
    assignmentsBody.innerHTML = assignmentsToRender.map(assignment => {
        return createAssignmentRow(assignment);
    }).join('');
}

function createAssignmentRow(assignment) {
    const dueDate = new Date(assignment.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const daysUntilDue = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
    
    let dueDateClass = 'normal';
    let dueDateText = dueDate.toLocaleDateString();
    
    if (daysUntilDue < 0 && assignment.status !== 'submitted') {
        dueDateClass = 'overdue';
        dueDateText = `${Math.abs(daysUntilDue)} days overdue`;
    } else if (daysUntilDue <= 2 && assignment.status === 'pending') {
        dueDateClass = 'soon';
        dueDateText = daysUntilDue === 0 ? 'Due today' : `Due in ${daysUntilDue} day${daysUntilDue > 1 ? 's' : ''}`;
    } else if (daysUntilDue < 0 && assignment.status == 'submitted'){
        dueDateClass = 'submitted';
        dueDateText = dueDate.toLocaleDateString();
    }
    
    return `
        <tr>
            <td>
                <div class="assignment-title">${assignment.title}</div>
                ${assignment.description ? `<div class="assignment-description">${assignment.description}</div>` : ''}
            </td>
            <td>
                <div class="assignment-course">
                    <i class="fas fa-book course-icon"></i>
                    ${assignment.course}
                </div>
            </td>
            <td>
                <span class="due-date ${dueDateClass}">${dueDateText}</span>
            </td>
            <td>
                <span class="status-badge ${assignment.status}">${assignment.status}</span>
            </td>
            <td>
                <div class="assignment-actions">
                    ${assignment.status === 'pending' ? 
                        `<button class="action-btn btn-success" onclick="updateAssignmentStatus(${assignment.id}, 'submitted')">
                            <i class="fas fa-check"></i> Submit
                        </button>` : 
                        `<div class="action-btn btn-secondary" style="text-align: center;">
                            <i class="fas fa-check-circle"></i> Done
                        </div>`
                    }
                </div>
            </td>
        </tr>
    `;
}

function updateAssignmentStatus(assignmentId, newStatus) {
    const assignment = assignments.find(a => a.id === assignmentId);
    if (assignment) {
        assignment.status = newStatus;
        
        const filteredIndex = filteredAssignments.findIndex(a => a.id === assignmentId);
        if (filteredIndex !== -1) {
            filteredAssignments[filteredIndex].status = newStatus;
        }
        
        applyFilters();
        
        showNotification(`Assignment marked as ${newStatus}!`);
    }
}

function updateStats() {
    const stats = {
        pending: assignments.filter(a => a.status === 'pending').length,
        submitted: assignments.filter(a => a.status === 'submitted').length,
        overdue: assignments.filter(a => {
            const dueDate = new Date(a.dueDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return dueDate < today && a.status !== 'submitted';
        }).length
    };

    pendingCount.textContent = stats.pending;
    submittedCount.textContent = stats.submitted;
    overdueCount.textContent = stats.overdue;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2); 
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getDaysUntilDue(dueDateString) {
    const dueDate = new Date(dueDateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
}
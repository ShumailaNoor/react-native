document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupNavigation();
});

function initializeDashboard() {
    updateHeader();
    updateSummaryCards();
    displayRecentCourses();
    displayUpcomingAssignments();
    displayWeeklySchedule();
}

function updateHeader() {
    document.getElementById('studentName').textContent = studentInfo.name;
    document.getElementById('currentDate').textContent = getCurrentDate();
    document.getElementById('notificationBadge').textContent = notifications.length;
}

function updateSummaryCards() {
    document.getElementById('totalCourses').textContent = courses.length;
    
    const pendingAssignments = filterAssignmentsByStatus(assignments, 'pending');
    document.getElementById('pendingAssignments').textContent = pendingAssignments.length;
    
    const avgAttendance = calculateAverageAttendance(attendance);
    document.getElementById('averageAttendance').textContent = avgAttendance + '%';
    
    const currentGPA = calculateGPA(courses);
    document.getElementById('currentGPA').textContent = currentGPA;
}

function displayRecentCourses() {
    const container = document.getElementById('recentCourses');
    container.innerHTML = '';
    
    const recentCourses = courses.slice(0, 4);
    
    recentCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Instructor: ${course.instructor}</p>
            <p>Grade: <span style="color: ${getGradeColor(course.grade)}; font-weight: 600;">${course.grade}</span></p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${course.progress}%"></div>
            </div>
            <small style="color: #7f8c8d; margin-top: 8px; display: block;">Progress: ${course.progress}%</small>
        `;
        
        container.appendChild(courseCard);
    });
}

function displayUpcomingAssignments() {
    const container = document.getElementById('upcomingAssignments');
    container.innerHTML = '';
    
    const upcomingAssignments = getUpcomingAssignments(assignments).slice(0, 5);
    
    if (upcomingAssignments.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #7f8c8d;">No upcoming assignments</p>';
        return;
    }
    
    upcomingAssignments.forEach(assignment => {
        const assignmentItem = document.createElement('div');
        assignmentItem.className = 'assignment-item';
        
        assignmentItem.innerHTML = `
            <div class="assignment-content">
                <h4>${assignment.title}</h4>
                <p>${assignment.course}</p>
            </div>
            <div class="assignment-due" style="color: ${getPriorityColor(assignment.priority)};">
                ${getDaysUntilDue(assignment.dueDate)}
            </div>
        `;
        
        container.appendChild(assignmentItem);
    });
}

function displayWeeklySchedule() {
    const container = document.getElementById('weeklySchedule');
    container.innerHTML = '';
    
    const today = new Date().getDay(); 
    const todayIndex = today === 0 ? 6 : today - 1; 
    
    for (let i = 0; i < 5; i++) {
        const dayIndex = (todayIndex + i) % 7;
        const scheduleDay = weeklySchedule[dayIndex];
        
        const dayElement = document.createElement('div');
        dayElement.className = 'schedule-day';
        
        if (i === 0) {
            dayElement.style.background = '#e3f2fd';
            dayElement.style.border = '2px solid #667eea';
        }
        
        const classesText = scheduleDay.classes.length > 3 
            ? scheduleDay.classes.slice(0, 2).join('<br>') + '<br>+' + (scheduleDay.classes.length - 2) + ' more'
            : scheduleDay.classes.join('<br>');
        
        dayElement.innerHTML = `
            <h4>${scheduleDay.day} ${i === 0 ? '(Today)' : ''}</h4>
            <p style="font-size: 0.75rem; line-height: 1.4;">${classesText}</p>
        `;
        
        container.appendChild(dayElement);
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
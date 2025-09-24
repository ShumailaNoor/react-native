// Attendance Page JavaScript

let filteredAttendance = [...attendance];

document.addEventListener('DOMContentLoaded', function() {
    initializeAttendancePage();
    setupEventListeners();
});

function initializeAttendancePage() {
    updateStatistics();
    displayAttendance(attendance);
    setupNavigation();
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    document.getElementById('attendanceFilter').addEventListener('change', handleFilters);
    document.getElementById('sortBy').addEventListener('change', handleFilters);
}

function updateStatistics() {
    let totalClasses = 0;
    let totalAttended = 0;
    
    attendance.forEach(item => {
        totalClasses += item.total;
        totalAttended += item.attended;
    });
    
    const avgAttendance = Math.round((totalAttended / totalClasses) * 100);
    document.getElementById('averageAttendance').textContent = avgAttendance + '%';
    
    document.getElementById('totalClasses').textContent = totalClasses;
    document.getElementById('classesAttended').textContent = totalAttended;
    document.getElementById('classesMissed').textContent = totalClasses - totalAttended;
}

function handleSearch() {
    applyFiltersAndSearch();
}

function handleFilters() {
    applyFiltersAndSearch();
}

function applyFiltersAndSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const attendanceFilter = document.getElementById('attendanceFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    
    let filtered = [...attendance];
    
    if (searchTerm) {
        filtered = filtered.filter(item => 
            item.subject.toLowerCase().includes(searchTerm)
        );
    }
    
    if (attendanceFilter !== 'all') {
        switch (attendanceFilter) {
            case 'excellent':
                filtered = filtered.filter(item => item.percentage >= 90);
                break;
            case 'good':
                filtered = filtered.filter(item => item.percentage >= 75 && item.percentage < 90);
                break;
            case 'poor':
                filtered = filtered.filter(item => item.percentage < 75);
                break;
        }
    }
    
    filtered = sortAttendance(filtered, sortBy);
    
    filteredAttendance = filtered;
    displayAttendance(filtered);
}

function sortAttendance(attendanceList, sortBy) {
    const sorted = [...attendanceList];
    
    switch (sortBy) {
        case 'subject':
            return sorted.sort((a, b) => a.subject.localeCompare(b.subject));
        case 'percentage':
            return sorted.sort((a, b) => b.percentage - a.percentage);
        case 'attended':
            return sorted.sort((a, b) => b.attended - a.attended);
        default:
            return sorted;
    }
}

function displayAttendance(attendanceList) {
    const tbody = document.getElementById('attendanceBody');
    const noResults = document.getElementById('noResults');
    const displayedCount = document.getElementById('displayedCount');
    
    displayedCount.textContent = `(${attendanceList.length})`;
    
    if (attendanceList.length === 0) {
        tbody.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    tbody.innerHTML = '';
    
    attendanceList.forEach(item => {
        const row = createAttendanceRow(item);
        tbody.appendChild(row);
    });
}

function createAttendanceRow(item) {
    const row = document.createElement('tr');
    
    const statusClass = getStatusClass(item.percentage);
    const percentageClass = getPercentageClass(item.percentage);
    const statusText = getStatusText(item.percentage);
    
    row.innerHTML = `
        <td>
            <strong>${item.subject}</strong>
        </td>
        <td>${item.attended}</td>
        <td>${item.total}</td>
        <td class="${percentageClass}">${item.percentage}%</td>
        <td>
            <span class="status-badge ${statusClass}">${statusText}</span>
        </td>
    `;
    
    return row;
}

function getStatusClass(percentage) {
    if (percentage >= 90) return 'status-excellent';
    if (percentage >= 75) return 'status-good';
    return 'status-poor';
}

function getPercentageClass(percentage) {
    if (percentage >= 90) return 'percentage-excellent';
    if (percentage >= 75) return 'percentage-good';
    return 'percentage-poor';
}

function getStatusText(percentage) {
    if (percentage >= 90) return 'Excellent';
    if (percentage >= 75) return 'Good';
    return 'Poor';
}

function getStatusColor(percentage) {
    if (percentage >= 90) return '#27ae60';
    if (percentage >= 75) return '#3498db';
    return '#e74c3c';
}

// Setup navigation (reuse from other pages)
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
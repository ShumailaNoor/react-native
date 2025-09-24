function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function getCurrentDate() {
    return formatDate(new Date());
}

function getDaysUntilDue(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due Today';
    if (diffDays === 1) return 'Due Tomorrow';
    return `${diffDays} days left`;
}

function formatDueDate(dueDate) {
    const date = new Date(dueDate);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
    });
}

function calculateAverageAttendance(attendanceData) {
    if (!attendanceData || attendanceData.length === 0) return 0;
    
    const total = attendanceData.reduce((sum, item) => sum + item.percentage, 0);
    return Math.round(total / attendanceData.length);
}

function getAttendanceColor(percentage) {
    if (percentage >= 90) return '#27ae60';  
    if (percentage >= 75) return '#f39c12';  
    return '#e74c3c';  
}

function getGradeColor(grade) {
    if (grade.startsWith('A')) return '#27ae60';
    if (grade.startsWith('B')) return '#3498db';
    if (grade.startsWith('C')) return '#f39c12';
    return '#e74c3c';
}

function filterAssignmentsByStatus(assignments, status) {
    return assignments.filter(assignment => assignment.status === status);
}

function getUpcomingAssignments(assignments) {
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
    
    return assignments
        .filter(assignment => {
            if (assignment.status !== 'pending') return false;
            const dueDate = new Date(assignment.dueDate);
            return dueDate <= oneWeekFromNow;
        })
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}

function calculateGPA(courses) {
    const gradePoints = {
        'A+': 4.0, 'A': 4.0, 'A-': 3.7,
        'B+': 3.3, 'B': 3.0, 'B-': 2.7,
        'C+': 2.3, 'C': 2.0, 'C-': 1.7,
        'D+': 1.3, 'D': 1.0, 'F': 0.0
    };
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    courses.forEach(course => {
        const points = gradePoints[course.grade] || 0;
        totalPoints += points * course.credits;
        totalCredits += course.credits;
    });
    
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(1) : '0.0';
}

function getPriorityColor(priority) {
    switch (priority) {
        case 'high': return '#e74c3c';
        case 'medium': return '#f39c12';
        case 'low': return '#27ae60';
        default: return '#95a5a6';
    }
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

function searchData(data, searchTerm, searchFields) {
    if (!searchTerm) return data;
    
    const term = searchTerm.toLowerCase();
    return data.filter(item => {
        return searchFields.some(field => {
            const value = item[field];
            return value && value.toString().toLowerCase().includes(term);
        });
    });
}

function sortData(data, field, order = 'asc') {
    return [...data].sort((a, b) => {
        let aVal = a[field];
        let bVal = b[field];
    
        if (field.includes('Date')) {
            aVal = new Date(aVal);
            bVal = new Date(bVal);
        }
        
        if (order === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });
}
// Student Data
const studentInfo = {
    name: "Shumaila",
    email: "shumaila@gmail.com",
    
    studentId: "STU001",
    semester: "Fall 2024",
    major: "Computer Science"
};

// Courses Data
const courses = [
    { 
        id: 1, 
        name: "Web Development", 
        instructor: "Dr. Sarah Johnson", 
        progress: 80,
        credits: 3,
        grade: "A-",
        schedule: "MWF 10:00-11:00"
    },
    { 
        id: 2, 
        name: "Data Structures", 
        instructor: "Prof. Michael Chen", 
        progress: 65,
        credits: 4,
        grade: "B+",
        schedule: "TTh 14:00-15:30"
    },
    { 
        id: 3, 
        name: "Database Systems", 
        instructor: "Dr. Emily Davis", 
        progress: 90,
        credits: 3,
        grade: "A",
        schedule: "MWF 13:00-14:00"
    },
    { 
        id: 4, 
        name: "Mathematics", 
        instructor: "Prof. Robert Wilson", 
        progress: 45,
        credits: 4,
        grade: "B-",
        schedule: "TTh 09:00-10:30"
    },
    { 
        id: 5, 
        name: "Computer Networks", 
        instructor: "Dr. Lisa Anderson", 
        progress: 70,
        credits: 3,
        grade: "B+",
        schedule: "MWF 15:00-16:00"
    }
];

// Assignments Data
const assignments = [
    { 
        id: 1,
        title: "HTML/CSS Portfolio", 
        course: "Web Development", 
        dueDate: "2025-09-23", 
        status: "pending",
        description: "Create a personal portfolio website"
    },
    { 
        id: 2,
        title: "Binary Search Tree Implementation", 
        course: "Data Structures", 
        dueDate: "2025-09-30", 
        status: "pending",
        description: "Implement BST with insert, delete, search operations"
    },
    { 
        id: 3,
        title: "Database Design Project", 
        course: "Database Systems", 
        dueDate: "2025-10-05", 
        status: "pending",
        description: "Design and implement a complete database system"
    },
    { 
        id: 4,
        title: "Calculus Problem Set", 
        course: "Mathematics", 
        dueDate: "2025-09-25", 
        status: "submitted",
        description: "Solve integration and differentiation problems"
    },
    { 
        id: 5,
        title: "Network Protocol Analysis", 
        course: "Computer Networks", 
        dueDate: "2025-09-15", 
        status: "pending",
        description: "Analyze TCP/IP protocol behavior"
    },
    { 
        id: 6,
        title: "JavaScript Quiz", 
        course: "Web Development", 
        dueDate: "2025-09-22", 
        status: "submitted",
        description: "Online quiz on JavaScript fundamentals"
    }
];

// Attendance Data
const attendance = [
    { subject: "Web Development", attended: 18, total: 20, percentage: 90 },
    { subject: "Data Structures", attended: 16, total: 20, percentage: 80 },
    { subject: "Database Systems", attended: 19, total: 20, percentage: 95 },
    { subject: "Mathematics", attended: 14, total: 20, percentage: 70 },
    { subject: "Computer Networks", attended: 17, total: 20, percentage: 85 }
];

// Weekly Schedule Data
const weeklySchedule = [
    { day: "Monday", classes: ["Web Dev 10:00", "Database 13:00", "Networks 15:00"] },
    { day: "Tuesday", classes: ["Data Structures 14:00", "Mathematics 09:00"] },
    { day: "Wednesday", classes: ["Web Dev 10:00", "Database 13:00", "Networks 15:00"] },
    { day: "Thursday", classes: ["Data Structures 14:00", "Mathematics 09:00"] },
    { day: "Friday", classes: ["Web Dev 10:00", "Database 13:00", "Networks 15:00"] },
    { day: "Saturday", classes: ["No Classes"] },
    { day: "Sunday", classes: ["Study Day"] }
];

// Notifications Data
const notifications = [
    {
        id: 1,
        title: "Assignment Due Soon",
        message: "HTML/CSS Portfolio is due in 2 days",
        type: "warning",
        date: "2024-09-23"
    },
    {
        id: 2,
        title: "New Grade Posted",
        message: "JavaScript Quiz grade has been posted",
        type: "info",
        date: "2024-09-22"
    },
    {
        id: 3,
        title: "Class Cancelled",
        message: "Mathematics class cancelled for tomorrow",
        type: "alert",
        date: "2024-09-23"
    }
];
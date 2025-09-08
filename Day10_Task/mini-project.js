const students = [
  { name: "Alice", marks: [80, 75, 90] },
  { name: "Bob", marks: [60, 70, 72] },
  { name: "Charlie", marks: [90, 95, 100] },
];

//--> Average of numbers
function calculateAverage(marks) {
  return marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
}

//--> Show each student’s average grade using map() + reduce().
const studentsWithAvg = students.map(student => {
  return {
    ...student,
    average: calculateAverage(student.marks)
  };
});
console.log("Students with averages:", studentsWithAvg);

//--> Filter students with an average above 80.
const topStudents = studentsWithAvg.filter(student => student.average > 80);
console.log("Top Students with avg > 80:", topStudents);

//--> Calculate class average.
const classAverage = studentsWithAvg.reduce((sum, std) => sum + std.average, 0) / studentsWithAvg.length;
console.log("Class Average:", classAverage);

//--> Sort students by average grade (use .sort()).
const sortedStudents = [...studentsWithAvg].sort((a, b) => b.average - a.average);
console.log("Sorted by average:", sortedStudents);

//--> Add a new student (push)
students.push({ name: "David", marks: [85, 88, 92] });
console.log("After adding new student:", students);

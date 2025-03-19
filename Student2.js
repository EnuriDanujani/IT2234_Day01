
let students = [
    { id: 1, name: "Ashani", gender: "Female", course: "IT", gpa: 3.8 },
    { id: 2, name: "Bawantha", gender: "Male", course: "Business", gpa: 3.2 },
    { id: 3, name: "Chamikara", gender: "Male", course: "IT", gpa: 3.5 },
    { id: 4, name: "Dinithi", gender: "Female", course: "Engineering", gpa: 3.9 },
    { id: 5, name: "Enuri", gender: "Female", course: "IT", gpa: 4.0 },
    { id: 6, name: "hansana", gender: "Male", course: "IT", gpa: 2.8 },
    { id: 7, name: "yamuna", gender: "Female", course: "Science", gpa: 3.6 },
    { id: 8, name: "sunil", gender: "Male", course: "IT", gpa: 3.7 },
    { id: 9, name: "ama", gender: "Female", course: "Business", gpa: 3.4 },
    { id: 10, name: "kasun", gender: "Male", course: "Engineering", gpa: 3.1 }
];


let femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);


let itStudents = students.filter(student => student.course === "IT");
console.log("IT Students:", itStudents);


let maxGPA = Math.max(...students.map(student => student.gpa));
console.log("Max GPA:", maxGPA);


let avgGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;
console.log("Average GPA:", avgGPA.toFixed(2));

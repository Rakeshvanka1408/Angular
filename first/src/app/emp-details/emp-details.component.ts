import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-emp-details',
  imports: [CommonModule],
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {
employee : any[]=[];
constructor(){
  this.employee=[
    { empid: 101, empname: "Ramu", gender: "Male", title: "Software Developer", salary: 200000, Address: "Hyderabad", DOB: "14-08-2002", department: "Development" },
    { empid: 102, empname: "Sita", gender: "Female", title: "UI/UX Designer", salary: 180000, Address: "Bangalore", DOB: "22-05-1998", department: "Design" },
    { empid: 103, empname: "Krishna", gender: "Male", title: "Data Analyst", salary: 220000, Address: "Chennai", DOB: "10-11-2000", department: "Development" },
    { empid: 104, empname: "Priya", gender: "Female", title: "Full Stack Developer", salary: 250000, Address: "Pune", DOB: "08-03-1997", department: "Development" },
    { empid: 105, empname: "Arjun", gender: "Male", title: "Backend Developer", salary: 210000, Address: "Mumbai", DOB: "19-07-1999", department: "Development" },
    { empid: 106, empname: "Meena", gender: "Female", title: "QA Engineer", salary: 190000, Address: "Kolkata", DOB: "05-12-2001", department: "QA" },
    { empid: 107, empname: "Ravi", gender: "Male", title: "DevOps Engineer", salary: 230000, Address: "Hyderabad", DOB: "30-09-1995", department: "Development" },
    { empid: 108, empname: "Anjali", gender: "Female", title: "Frontend Developer", salary: 205000, Address: "Delhi", DOB: "25-06-1996", department: "Development" },
    { empid: 109, empname: "Vikram", gender: "Male", title: "Cloud Engineer", salary: 260000, Address: "Bangalore", DOB: "13-02-1994", department: "Development" },
    { empid: 110, empname: "Neha", gender: "Female", title: "Business Analyst", salary: 185000, Address: "Pune", DOB: "18-11-1998", department: "Design" },
    { empid: 111, empname: "Rajesh", gender: "Male", title: "System Administrator", salary: 175000, Address: "Chennai", DOB: "21-09-1993", department: "Development" },
    { empid: 112, empname: "Kavya", gender: "Female", title: "AI Engineer", salary: 280000, Address: "Hyderabad", DOB: "02-04-1997", department: "Development" },
    { empid: 113, empname: "Manoj", gender: "Male", title: "Machine Learning Engineer", salary: 290000, Address: "Delhi", DOB: "07-08-1996", department: "Development" },
    { empid: 114, empname: "Harsha", gender: "Male", title: "Cybersecurity Analyst", salary: 240000, Address: "Mumbai", DOB: "11-01-1995", department: "QA" },
    { empid: 115, empname: "Swathi", gender: "Female", title: "Software Engineer", salary: 195000, Address: "Kolkata", DOB: "15-06-2000", department: "Development" },
    { empid: 116, empname: "Suresh", gender: "Male", title: "Technical Writer", salary: 160000, Address: "Hyderabad", DOB: "09-07-1992", department: "Design" },
    { empid: 117, empname: "Pooja", gender: "Female", title: "HR Manager", salary: 220000, Address: "Bangalore", DOB: "28-10-1990", department: "HR" },
    { empid: 118, empname: "Naveen", gender: "Male", title: "Product Manager", salary: 300000, Address: "Pune", DOB: "03-12-1989", department: "HR" },
    { empid: 119, empname: "Divya", gender: "Female", title: "Software Tester", salary: 185000, Address: "Chennai", DOB: "06-05-1998", department: "QA" },
    { empid: 120, empname: "Kiran", gender: "Male", title: "Project Lead", salary: 350000, Address: "Delhi", DOB: "12-09-1987", department: "HR" }
  ]
}
getLatestData(){[
  { empid: 121, empname: "Divya", gender: "Female", title: "Software Tester", salary: 185000, Address: "Chennai", DOB: "06-05-1998", department: "QA" },
    { empid: 122, empname: "Kiran", gender: "Male", title: "Project Lead", salary: 350000, Address: "Delhi", DOB: "12-09-1987", department: "HR" }
]
}
}

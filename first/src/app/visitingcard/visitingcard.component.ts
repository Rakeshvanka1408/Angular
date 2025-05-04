import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { user } from '../user';

@Component({
  selector: 'app-visitingcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitingcard.component.html',
  styleUrl: './visitingcard.component.css'
})
export class VisitingcardComponent {

  users: any[] = [];
  @Input('userObj') userObj:user= new user;
  constructor() {
   
  }
  ngOnInit(){
    this.users = [{
      //name: "rakesh",
      name:this.userObj.name,
      title: this.userObj.title,
      salary: this.userObj.salary,
      department: this.userObj.department,
      address: this.userObj.address,
      phones:this.userObj.phone
    },
    {
      name: "mahesh",
      title: " devops engineer",
      salary: "7 lakhs",
      department: 2,
      address: ["SR Nagar", "Hyderabad", "500038"],
      phones: [
        '9707938',
        '32335253',
        '56463727']
    }
    ]
  }
}

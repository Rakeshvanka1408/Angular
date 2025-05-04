import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  var1 = "Welcome to Angular";
  userName: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  date: string = "";
  controlFlag: boolean = false;

  guestName: String="Ashokit";
  
  constructor() {
    this.email = "rakesh123@gmail.com";
    this.firstName = "Rakesh";
    this.lastName = "vanka";
    this.userName = "RakeshVanka";
    setInterval(() => {
      let currentDate = new Date();
      this.date = currentDate.toDateString() + "  " + currentDate.toLocaleTimeString();
      this.controlFlag = Math.random() > 0.5 ? true : false;
    }, 1000
    )

  }
  getUserName(): string {
    return this.userName;
  }

  getEmail(): string {
    return this.email;
  }
  getFirstName(): String {
    return this.firstName;
  }
  getLastName(): String {
    return this.lastName;
  }
  updateName(empName:string){
    this.userName=empName;
  }

}

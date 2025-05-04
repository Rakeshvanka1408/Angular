import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { VisitingcardComponent } from './visitingcard/visitingcard.component';


import { user } from './user';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstComponent,SecondComponent,VisitingcardComponent,EmpDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First';
   uname:string="Sydney sweeny";
   userInput:user= new user;
  constructor(){
    this.userInput.name="Rakesh",
    this.userInput.title="Tech lead",
    this.userInput.address="SR Nagar, Hyderabad",
    this.userInput.department="Development",
    this.userInput.phone=["90743048083"],
    this.userInput.salary="7lakhs"
  }
}

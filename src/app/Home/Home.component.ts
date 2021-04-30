import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees:Observable<Employee[]>;
  p:number=1;
  key: string;
  reverse: boolean = false;
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).
    subscribe(
      data =>{
        console.log(data);
        alert("Record Deleted Successfully");
        this.reloadData();
      },
      error =>console.log(error));
  }

  updateEmployee(id:number){
    this.router.navigate(['/update',id]);
  }

 employeeDetails(id:number){
    this.router.navigate(['/details',id]);
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  add(){
    this.router.navigate(["/add-profile"]);
  }
  
  backToHome() 
  {
    this.router.navigate(['/home']);
    
  }
}



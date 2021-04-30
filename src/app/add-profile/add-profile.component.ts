import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';

import {NgForm} from '@angular/forms';
import { Employee } from '../employee';
@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {
    gender='male';
  employee:Employee=new Employee;
  submitted = false;
  constructor(private employeeService:EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  newEmployee(){
    this.submitted=true;
    this.employee =new Employee();
  }
  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    //this.gotoList();
    this.alertMsg();
  }
onSubmit() {
    this.submitted = true;
    this.save();    
  }
/*gotoList() {
    this.router.navigate(['/view-candidate']);
  }*/

  alertMsg()
  {
    if(this.submitted == true)
    {
      alert('Data Added Successfully');
      this.router.navigate(['/home']);

    }
    else{
      alert('Data not Added');
      this.router.navigate(['/add-profile']);
    }
   
  }
     
 
 backTohome()
  {
    this.router.navigate(['/home']);
  }
}



import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';




@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee;
  id:number;
  constructor(private route:ActivatedRoute,private router:Router,
    private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).
    subscribe(
      data =>{
        console.log(this.employee.firstName);
        console.log(this.employee.company);
        console.log(data);
        this.employee=data;
      },
      error =>
      {
        console.log(error);
        console.log("error occured in details-component-ts");
      });
   }

   list(){
     this.router.navigate(['/home']);
   }

}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HumanResourceService} from "../human-resource.service";
import {HumanResource} from "../human-resource";
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  humanResource:HumanResource =new HumanResource();
  submitted = false;
   msg="";

  constructor(private humanreSourceService:HumanResourceService,private router:Router) { }

  ngOnInit() {
  }

 


  save(){
    this.humanreSourceService.loginUserFromRemote(this.humanResource)
    .subscribe(
    data =>{
      console.log(data);
      console.log("response received");
      this.router.navigate(['/home']);
      this.alertMsg();
     },
    error => {
      console.log("exception occured");
      this.msg="Bad Credentials, Please enter valid User Name & Password";
    });
   }

  
  onSubmit()
  {
    this.submitted=true;
    this.save();
   
  }
  alertMsg()
  {
    if(this.submitted == true)
    {
      alert('Data Added Successfully');
      this.router.navigate(['/home']);

    }
    else{
      alert('Data not Added');
      this.router.navigate(['/home']);
    }
   
  }

  backToHome()
  {
    this.router.navigate(['/home']);
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddProfileComponent } from './add-profile/add-profile.component';

import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'add-profile',component:AddProfileComponent},
  // {path:'view-candidate',component:ViewCandidateComponent},
  {path:'update/:id',component:UpdateEmployeeComponent},
  {path:'details/:id',component:EmployeeDetailsComponent},
  
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

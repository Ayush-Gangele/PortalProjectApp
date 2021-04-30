import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private url=" http://localhost:8009/ap/candidate";
 
 constructor(private http:HttpClient) { }

 //store data in db
 createEmployee(employee:Object):Observable<Object>
 {
   return this.http.post(`${this.url}`,employee);
 }
//fetch list of employees
 getEmployeeList():Observable<any>
 {
   return this.http.get<any>(`${this.url}`);
 }

 //delete specific employee
 deleteEmployee(id:number):Observable<any>
 {
   return this.http.delete(`${this.url}/${id}`,{responseType:'text'})
 }

 //fetch specific candidate data 
 getEmployee(id:number):Observable<any>
 {
   return this.http.get(`${this.url}/${id}`);
 }

 //update method
 updateEmployee(id:number,value:Object):Observable<Object>
 {
   console.log("entered in updateCandidate() method of employeeService");
  return this.http.put(`${this.url}/${id}`,value);
 }



}

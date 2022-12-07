import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchproduct=()=>{
    return this.http.get("http://localhost:8080/viewp")
  }

  addproduct=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/addp",datatosend)
  }

  searchproduct=(datasearch:any)=>{
    return this.http.post("http://localhost:8080/searchp",datasearch)
  }
}

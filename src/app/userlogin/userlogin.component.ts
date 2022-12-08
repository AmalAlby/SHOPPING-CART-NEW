import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  emailid=""
  password=""

  data:any=[]
  constructor(private route:Router,private api:ApiService){
    api.viewuser().subscribe(
      (response:any)=>{
        this.data=response
      }
    )
  }

  log=()=>{
    
    let f:any
    for(let i=0;i<this.data.length;i++){
      if(this.emailid==this.data[i].emailid && this.password==this.data[i].password){
        f=true
      }
    }
    if(f==true){
      this.route.navigate(["/uview"])
    }
    else{
      alert("INVALID CREDENTIALS")
    }
  }


}

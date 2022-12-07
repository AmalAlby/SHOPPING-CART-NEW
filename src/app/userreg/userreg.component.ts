import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {

  name=""
  address=""
  emailid=""
  phonenumber=""
  password=""
  cpassword=""

  constructor(private api:ApiService,private route:Router){}
  

  read=()=>{
    let data:any= {
      "name":this.name,
      "address": this.address,
      "emailid": this.emailid,
      "phonenumber": this.phonenumber,
      "password": this.password,
      "cpassword":this.cpassword
  }
  console.log(data)

  if(this.password==this.cpassword){

    this.api.adduser(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Registered Successfully...Going back to login")
          this.name=""
          this.address=""
          this.emailid=""
          this.phonenumber=""
          this.password=""
          this.cpassword=""
          this.route.navigate(["/ulogin"])
        }
      }
    )

  }
  else{
    alert("Something Went Wrong")
  }



  }


}

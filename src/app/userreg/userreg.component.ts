import { Component } from '@angular/core';
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

  constructor(private api:ApiService){}

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

  this.api.adduser(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success" && this.password==this.cpassword){
        alert("Added Successfully")
        this.name=""
        this.address=""
        this.emailid=""
        this.phonenumber=""
        this.password=""
        this.cpassword=""
      }
      else{
        alert("Something Went Wrong")
      }
    }
  )

  }


}

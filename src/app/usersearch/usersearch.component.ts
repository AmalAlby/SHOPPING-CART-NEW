import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent {

  constructor(private api:ApiService){}

  name=""
  searchdata:any=[]

  read=()=>{
    let data={"name":this.name}
    console.log(data)
    this.api.searchproduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid Input")
        }
        else{
          this.searchdata=response
          this.name=""
        }
      }
    )
  }

}

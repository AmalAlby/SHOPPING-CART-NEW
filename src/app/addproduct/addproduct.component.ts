import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private api:ApiService){}

  name=""
  imagelink=""
  category=""
  price=""

  readvalues=()=>{
    let data:any={"name":this.name,"imagelink":this.imagelink,"category":this.category,"price":this.price}
    console.log(data)
    this.api.addproduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Added Successfully")
          this.name=""
          this.imagelink=""
          this.category=""
          this.price=""
        }
        else{
          alert("Something Went Wrong")
        }
      }
    )
  }

}

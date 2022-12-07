import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {

  data:any=[]

  constructor(private api:ApiService){

    api.fetchproduct().subscribe(
      (response:any)=>{
        this.data=response
      }
    )

  }





}

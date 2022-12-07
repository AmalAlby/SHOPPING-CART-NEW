import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {

  data:any=[]

  constructor(private api:ApiService){

    api.fetchproduct().subscribe(
      (response:any)=>{
        this.data=response
      }
    )

  }

}

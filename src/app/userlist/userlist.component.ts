import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import { UserListArrayModel } from '../model/UserListArrayModel';
import {User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  constructor(private _service:NgserviceService,private httpClient: HttpClient) { }
  name = 'app-userlist';
  users:any = [];
  baseUrl='';
  get_userlist()
  {
    
    console.log("geliyor mu");
    this.httpClient.get(this.baseUrl).subscribe((res :{})=>{
      console.log(res);
      this.users = res;

    });

   
   
  }
  ngOnInit(): void 
  {

    
      console.log("ngOnInit calisti");
      this._service.fetchUserListFromRemote();

      //        console.log("response after" + JSON.stringify(data))
              console.log("ngOnInit calisma bitti");
  }


}

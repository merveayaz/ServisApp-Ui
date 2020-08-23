import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import { UserListArrayModel } from '../model/UserListArrayModel';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private _service:NgserviceService) { }

  ngOnInit(): void {
      console.log("ngOnInit calisti");
      this._service.fetchUserListFromRemote();

      //        console.log("response after" + JSON.stringify(data))
              console.log("ngOnInit calisma bitti");
  }


}

import { Injectable, Testability } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { UserListArrayModel } from './model/UserListArrayModel';
import { map, debounceTime } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }
  fetchUserListFromRemote():any{
    console.log("response before");
     this._http.get("http://localhost:8080/getuserlist").subscribe((data) => {
      console.log("response after" + JSON.stringify(data));
      return <UserListArrayModel>data;
    });

  }
  addUserToRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/adduser", user);

  }
}

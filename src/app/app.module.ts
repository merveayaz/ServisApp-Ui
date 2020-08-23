import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppuserComponent } from './appuser/appuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserrComponent } from './userr/userr.component';

@NgModule({
  declarations: [
    AppComponent,
    AppuserComponent,
    UserlistComponent,
    EdituserComponent,
    ViewuserComponent,
    UserComponent,
    UserrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

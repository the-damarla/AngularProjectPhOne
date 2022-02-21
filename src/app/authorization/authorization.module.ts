import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceComponent } from './login-service/login-service.component';


@NgModule({
  declarations: [
    LoginServiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoginServiceComponent]
})
export class AuthorizationModule { }

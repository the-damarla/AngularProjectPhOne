import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceComponent } from './login-service/login-service.component';
import { SignUpServiceComponent } from './sign-up-service/sign-up-service.component';


@NgModule({
  declarations: [
    LoginServiceComponent,
    SignUpServiceComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[LoginServiceComponent]
})
export class AuthorizationModule { }

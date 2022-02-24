import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewAnotherProfileComponent } from './another-profile/view-another-profile/view-another-profile.component';
import { SignUpServiceComponent } from './authorization/sign-up-service/sign-up-service.component';

const routes: Routes = [
  {
    component:NavBarComponent,
    path:'navBar'
  },
  {
    component:ViewAnotherProfileComponent,
    path:'anotherProfile/:hero'
  },
  {
    component:SignUpServiceComponent,
    path:'signUp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

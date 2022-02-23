import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAnotherProfileComponent } from './view-another-profile/view-another-profile.component';



@NgModule({
  declarations: [
    ViewAnotherProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ViewAnotherProfileComponent]
})
export class AnotherProfileModule { }

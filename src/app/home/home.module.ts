import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeSingleCardComponent } from './home-card/home-single-card/home-single-card.component';



@NgModule({
  declarations: [
    HomeCardComponent,
    HomeSingleCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeCardComponent,HomeSingleCardComponent]
})
export class HomeModule { }

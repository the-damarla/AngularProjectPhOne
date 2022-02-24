import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfMoviesComponent } from './list-of-movies/list-of-movies.component';



@NgModule({
  declarations: [
    ListOfMoviesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListOfMoviesComponent
  ]
})
export class AvailableMoviesModule { }

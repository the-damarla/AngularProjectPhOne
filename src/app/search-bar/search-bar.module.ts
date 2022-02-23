import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarInputComponent } from './search-bar-input/search-bar-input.component';

@NgModule({
  declarations: [
    SearchBarInputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [SearchBarInputComponent]
})
export class SearchBarModule { }

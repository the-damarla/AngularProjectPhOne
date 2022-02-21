import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationcardComponent } from './notificationcard/notificationcard.component';
import { NotificationSingleCardComponent } from './notificationcard/notification-single-card/notification-single-card.component';



@NgModule({
  declarations: [
    NotificationcardComponent,
    NotificationSingleCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NotificationcardComponent]
})
export class NotificationModule { }

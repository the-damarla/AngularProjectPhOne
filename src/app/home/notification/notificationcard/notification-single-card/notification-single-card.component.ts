import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-single-card',
  templateUrl: './notification-single-card.component.html',
  styleUrls: ['./notification-single-card.component.css']
})
export class NotificationSingleCardComponent implements OnInit {

  constructor() { }
  @Input() notification:any
  ngOnInit(): void {
  }

}

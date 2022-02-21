import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home-single-card',
  templateUrl: './home-single-card.component.html',
  styleUrls: ['./home-single-card.component.css']
})
export class HomeSingleCardComponent implements OnInit {

  constructor() { }
  @Input() mve: any
  hello()
  {
      console.log(this.mve)
  }
  
  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectOne';

  checkingOn()
  {
    if(localStorage.getItem('userName') == '')
    {
      return false;
    }
    else{
      return true;
    }
  }
}

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
     const k = localStorage.getItem('userName')
     if(k == null)return false
     else return true
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-service',
  templateUrl: './login-service.component.html',
  styleUrls: ['./login-service.component.css']
})
export class LoginServiceComponent implements OnInit {
  constructor(private router: Router) { 
    this.flag = true
   }

  flag = true
  changeToSignUp()
  {
    this.flag=!this.flag
  }

  isEmail(email:any)
  {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
  }

  checkInputs()
  {
    const userName = (<HTMLInputElement>document.getElementById('uName')).value.trim()
    const passWord = (<HTMLInputElement>document.getElementById('pWord')).value.trim()
    if(!this.isEmail(userName))
    {
      document.getElementById('uName')!.style.boxShadow="0px 0px 6px 3px red"
    }
    else if(!this.isEmail(userName) && passWord === '')
    {
      document.getElementById('uName')!.style.boxShadow="0px 0px 6px 3px red"
      document.getElementById('pWord')!.style.boxShadow="0px 0px 6px 3px red"
    }
    else if(this.isEmail(userName) && passWord === '')
    {
      document.getElementById('uName')!.style.boxShadow="0px 0px 6px 3px black"
      document.getElementById('pWord')!.style.boxShadow="0px 0px 6px 3px red"
    }
    else{
      localStorage.setItem('userName',userName)
      this.router.navigateByUrl('/navBar');
    }
  }

  ngOnInit(): void {
  }

}

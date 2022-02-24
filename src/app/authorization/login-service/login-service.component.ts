import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDataService } from 'src/app/services/register-data.service';


@Component({
  selector: 'app-login-service',
  templateUrl: './login-service.component.html',
  styleUrls: ['./login-service.component.css']
})
export class LoginServiceComponent implements OnInit {
  existingDetails:any []=[]
  constructor(private router: Router, private registeredDetails:RegisterDataService) {
    this.registeredDetails.getRegisteredDetails().subscribe((data)=>{
        this.existingDetails.push(data)
    }) 
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

  validateData(uName:any,pWord:any)
  {
    for(let i=0;i<this.existingDetails[0].length;i++)
    {
      if(this.existingDetails[0][i].emailId == uName && this.existingDetails[0][i].passWord == pWord)return true
    }
    return false
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
    else if(!this.validateData(userName,passWord))
    {
      document.getElementById('uName')!.style.boxShadow="0px 0px 6px 3px red"
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

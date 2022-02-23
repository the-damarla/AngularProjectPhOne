import { Component, OnInit } from '@angular/core';
import { RegisterDataService } from 'src/app/services/register-data.service';

@Component({
  selector: 'app-sign-up-service',
  templateUrl: './sign-up-service.component.html',
  styleUrls: ['./sign-up-service.component.css']
})
export class SignUpServiceComponent implements OnInit {

  constructor(private registerData:RegisterDataService) { }

  flag:number = 0

  isEmail(email:any)
  {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
  }

  checkInputs(item:any)
  {
    this.flag = 0
    const uName = item.firstName
    const orgName = item.orgName
    const eMail = item.emailId
    const pWord = item.passWord
    console.log(uName + " " + orgName + " " + eMail + " " + pWord)
    if(uName == '')
    {
      document.getElementById('fName')!.style.boxShadow="0px 0px 3px 1px red"
    }
    else{
      document.getElementById('fName')!.style.boxShadow="0px 0px 3px 1px black"
      this.flag++
    }
    if(orgName == '')
    {
      document.getElementById('orgName')!.style.boxShadow="0px 0px 3px 1px red"
    }
    else{
      document.getElementById('orgName')!.style.boxShadow="0px 0px 3px 1px black"
      this.flag++
    }
    if(!this.isEmail(eMail))
    {
      document.getElementById('eMail')!.style.boxShadow="0px 0px 3px 1px red"
    }
    else{
      document.getElementById('eMail')!.style.boxShadow="0px 0px 3px 1px black"
      this.flag++
    }
    if(pWord == '')
    {
      document.getElementById('pWord')!.style.boxShadow="0px 0px 3px 1px red"
    }
    else{
      document.getElementById('pWord')!.style.boxShadow="0px 0px 3px 1px black"
      this.flag++
    }
  }
  loginUser(item:any)
  {
    console.log(item)
    this.checkInputs(item)
    if(this.flag == 4)
    {
      this.registerData.saveUserData(item).subscribe((data)=>{
        console.log(data)
      })
    }
  }
  ngOnInit(): void {
  }

}

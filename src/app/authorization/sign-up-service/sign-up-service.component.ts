import { Component, OnInit } from '@angular/core';
import { RegisterDataService } from 'src/app/services/register-data.service';

@Component({
  selector: 'app-sign-up-service',
  templateUrl: './sign-up-service.component.html',
  styleUrls: ['./sign-up-service.component.css']
})
export class SignUpServiceComponent implements OnInit {

  existingDetails:any [] = []
  constructor(private registerData:RegisterDataService) { 
    this.registerData.getRegisteredDetails().subscribe((data)=>{
      this.existingDetails.push(data)
      console.log(this.existingDetails[0].length)
    })
  }

  flag:number = 0

  isEmail(email:any)
  {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
  }

  checkWithExistingMails(email:any)
  {
    for(let i=0;i<this.existingDetails[0].length;i++)
    {
      if(email == this.existingDetails[0][i].emailId){return false}
    }
    return true
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
      document.getElementById('eMail')!.style.boxShadow="0px 0px 3px 1px red";
    }
    else if(!this.checkWithExistingMails(eMail))
    {
      document.getElementById('eMail')!.style.boxShadow="0px 0px 3px 1px red";
      (<HTMLInputElement>document.getElementById('eMail')).value='';
      document.getElementById('invalidMail')!.innerHTML="*EMAIL ALREADY EXISTS*"
      document.getElementById('invalidMail')!.style.visibility = "inherit"
    }
    else{
      document.getElementById('eMail')!.style.boxShadow="0px 0px 3px 1px black"
      document.getElementById('invalidMail')!.style.visibility = "hidden"
      this.flag++
    }
    if(pWord === '')
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

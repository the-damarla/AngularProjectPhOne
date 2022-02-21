import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  home = false
  setting = true
  ticket = true
  profile = true
  constructor() { }
  hasClickedHome()
  {
    var k = (document.getElementById('homePh') !== null) ? (document.getElementById('homePh')?.title) : (document.getElementById('notHomePh')?.title)
    this.toggleFuntion(k)
  }
  hasClickedSettings()
  {
    var k = (document.getElementById('settingPh') !== null) ? (document.getElementById('settingPh')?.title) : (document.getElementById('notSettingPh')?.title)
    this.toggleFuntion(k)
  }
  hasClickedProfile()
  {
    var k = (document.getElementById('profilePh') !== null) ? (document.getElementById('profilePh')?.title) : (document.getElementById('notProfilePh')?.title)
    this.toggleFuntion(k)
  }
  hasClickedTicket()
  {
    var k = (document.getElementById('ticketPh') !== null) ? (document.getElementById('ticketPh')?.title) : (document.getElementById('notTicketPh')?.title)
    this.toggleFuntion(k)
  }
  toggleFuntion(text:any)
  {
    switch(text)
    {
      case 'home':
        this.setting = true
        this.ticket = true
        this.profile = true
        this.home = !this.home
        return
      case 'settings':
        this.home = true
        this.ticket = true
        this.profile = true
        this.setting = !this.setting
        return
      case 'ticket':
        this.ticket = !this.ticket
        this.home = true
        this.setting = true
        this.profile = true
        return
      case 'profile':
        this.profile = !this.profile
        this.home = true
        this.ticket = true
        this.setting = true
        return
      default:
        this.setting = true
        this.profile = true
        this.ticket = true
        this.home = true
    }
  }
  ngOnInit(): void {
  }

}

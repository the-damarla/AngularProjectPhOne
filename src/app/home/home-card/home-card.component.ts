import { Component, OnInit } from '@angular/core';
import { FeedDataService } from 'src/app/services/feed-data.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  comingData:any
  constructor(private feedData:FeedDataService) { 
    this.feedData.feedData().subscribe((data)=>{
      this.comingData = data
    })
  }
  
  noteCard:any[] = []
  addNotes(notes:String, task:any)
  {
    if(notes === ''){
      document.getElementById('head')!.style.boxShadow = "0px 0px 6px 3px red"
      document.getElementById('alertDivOfNotes')!.style.visibility="inherit"
      document.getElementById('alertDivOfNotes')!.style.color="red"
    }
    else{
      this.noteCard.push({id:this.noteCard.length,name:notes})
      document.getElementById('head')!.style.boxShadow = "0px 0px 6px 3px black"
      document.getElementById('alertDivOfNotes')!.style.visibility="hidden"
      task.value = ''
    }
  }

  removeNotes(id:number)
  {
    this.noteCard = this.noteCard.filter(notes=>notes.id !== id)
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { FeedDataService } from 'src/app/services/feed-data.service';

@Component({
  selector: 'app-view-another-profile',
  templateUrl: './view-another-profile.component.html',
  styleUrls: ['./view-another-profile.component.css']
})
export class ViewAnotherProfileComponent implements OnInit {

  movieProfile:any
  displayMovie:any
  gettingData:any [] = []
  constructor(private route:ActivatedRoute, private mves:MovieDataService,private feedData:FeedDataService) { 
    feedData.feedData().subscribe((data)=>{
        console.log(data)
        this.gettingData.push(data)
    })
   }

  checkingData(this: any)
    {
      for(let i=0;i<this.mves.arOfMves.data.length;i++)
      {
        // console.log("  " + this.mves.arOfMves.data[i].movieName + " " + this.movieProfile)
        if(this.movieProfile === this.mves.arOfMves.data[i].movieName)
        {
          console.log("I got U dude" + this.mves.arOfMves.data[i].movieName)
          this.displayMovie = this.mves.arOfMves.data[i]
          console.log(this.displayMovie)
        }
      }
    }
    checkInExistingWatchList(nameOfMovie:any)
    {
      for(let i=0;i<this.gettingData.length;i++)
      {
        if(nameOfMovie === this.gettingData[i].movieName)return false
      }
      return true
    }
    sendToWatchList(selectedMovie:any)
    {
      document.getElementById('showError')!.style.visibility="hidden"
      if(this.checkInExistingWatchList(selectedMovie.movieName))
      {
        document.getElementById('showError')!.style.visibility="inherit"
        return
      }
      this.feedData.AddToWatchList(selectedMovie).subscribe((data)=>{
        console.log(data)
      })
    }


  ngOnInit(): void {
    this.movieProfile = this.route.snapshot.paramMap.get('movie')
    this.checkingData()
  }
}
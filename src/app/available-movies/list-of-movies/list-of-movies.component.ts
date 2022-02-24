import { Component, OnInit } from '@angular/core';
import { FeedDataService } from 'src/app/services/feed-data.service';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.css']
})
export class ListOfMoviesComponent implements OnInit {

  movieList:any []=[]
  arrayToDisplay:any []=[]
  constructor(private listOfMovies:FeedDataService) { 
    this.listOfMovies.feedData().subscribe((data)=>{
        this.movieList.push(data)
        for(let i=0;i<this.movieList[0].length;i++)
        {
          this.arrayToDisplay.push(this.movieList[0][i])
        }
        console.log(this.arrayToDisplay)
    })
  }

  phSuggested()
  {
    for(let i=0;i<this.movieList[0].length;i++)
    {
      this.arrayToDisplay[i] = (this.movieList[0][i])
    }
  }

  sortedDisplay()
  {
    for(let i=0;i<this.arrayToDisplay.length;i++)
    {
      for(let j=0;j<this.arrayToDisplay.length;j++)
      {
        if(this.arrayToDisplay[i].rating > this.arrayToDisplay[j].rating){
          var temp = this.arrayToDisplay[i]
          this.arrayToDisplay[i] = this.arrayToDisplay[j]
          this.arrayToDisplay[j] = temp
        }
      }
    }
    console.log(this.arrayToDisplay)
  }

  openHeroProfile(nameOfHero:any)
  {
    console.log(nameOfHero)
  }

  ngOnInit(): void {
  }

}

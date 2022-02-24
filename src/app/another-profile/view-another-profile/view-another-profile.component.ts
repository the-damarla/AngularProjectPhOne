import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-view-another-profile',
  templateUrl: './view-another-profile.component.html',
  styleUrls: ['./view-another-profile.component.css']
})
export class ViewAnotherProfileComponent implements OnInit {

  heroProfile:any
  displayMovies:any [] = []
  gettingData:any [] = []
  constructor(private route:ActivatedRoute, private mves:MovieDataService,private searchData:SearchDataService) { 
    searchData.searchData().subscribe((data)=>{
        console.log(data)
        this.gettingData.push(data)
        console.log("heyyyy" , this.gettingData[0][0])
        this.checkingData()
    })
   }

  ngOnInit(): void {
    this.heroProfile = this.route.snapshot.paramMap.get('hero')
  }

  checkingData()
   { 
      for(let i=0;i<this.gettingData[0].length;i++)
      {
        console.log(this.gettingData[0].hero, "hero", i)
        if(this.gettingData[0][i].name == this.heroProfile)
        {
          this.displayMovies = this.gettingData[0][i].movies
          console.log(this.displayMovies)
          return
        }
      }
   }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FeedDataService {

  baseUrl = 'http://localhost:3000/data'
  constructor(private http:HttpClient) { }
  feedData()
  {
    return this.http.get(this.baseUrl)
  }
  AddToWatchList(data:any)
  {
    return this.http.post(this.baseUrl,data)
  }
}

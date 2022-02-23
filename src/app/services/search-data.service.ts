import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(private http:HttpClient) { }
  searchData()
  {
    return this.http.get("http://localhost:3000/search")
  }
}

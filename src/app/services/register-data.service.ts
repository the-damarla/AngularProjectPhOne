import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  baseUrl='http://localhost:3000/register'
  constructor(private http:HttpClient) { }
  saveUserData(item:any)
  {
    return this.http.post(this.baseUrl,item)
  }
}

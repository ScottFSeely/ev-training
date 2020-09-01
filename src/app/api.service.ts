import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'd3d3e9b9136d45c1a513dc5a7086909d';
  url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d3d3e9b9136d45c1a513dc5a7086909d";
  constructor( private httpClient: HttpClient ) { }

  // methods
  public getNews(){
    return this.httpClient.get(this.url);
    // return this.httpClient.get(`https://newsapi.org/v2/top-headlines?' + 'country=us' + '&apiKey=${this.API_KEY}`);
  }
}

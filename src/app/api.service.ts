// not my stuff
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// my stuff
import { TopHeadlines_t } from './top-headlines';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'd3d3e9b9136d45c1a513dc5a7086909d';
  url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d3d3e9b9136d45c1a513dc5a7086909d';
  
  constructor( private http: HttpClient ) { }

  // methods
  public getNews(){
    console.log(this.http.get<TopHeadlines_t[]>(this.url)['status']);

    return this.http.get<TopHeadlines_t[]>(this.url);
    // return this.http.get(`https://newsapi.org/v2/top-headlines?' + 'country=us' + '&apiKey=${this.API_KEY}`);
  }
}

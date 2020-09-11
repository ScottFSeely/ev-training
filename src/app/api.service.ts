// not my stuff
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// my stuff
// import { TopHeadlines_t } from './top-headlines';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'd3d3e9b9136d45c1a513dc5a7086909d';
  url = '/v2/top-headlines?country=us&apiKey=d3d3e9b9136d45c1a513dc5a7086909d';
  tr_url = "https://translation.googleapis.com/language/translate/v2";
  
  constructor( private http: HttpClient ) { }

  // methods
  public getNews(){
    console.log(this.http.get(this.url)['status']);

    return this.http.get(this.url);
    // return this.http.get(`https://newsapi.org/v2/top-headlines?' + 'country=us' + '&apiKey=${this.API_KEY}`);
  }

  public getTr(text: string) {
    console.log(this.http.post(this.tr_url, text));
    return this.http.post(this.tr_url, text);
  }

  
}

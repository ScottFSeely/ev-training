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
  news_url = 'https://newsapi.org';
  url = '/v2/top-headlines?country=us&apiKey=d3d3e9b9136d45c1a513dc5a7086909d';
  // will move google translate to its own service later
  baseTranslaionUrl = "https://translation.googleapis.com";
  TranslationUrl = "https://translation.googleapis.com/language/translate/v2";
  
  constructor( private http: HttpClient ) { }

  // methods
  public getNews(){
    const endpoint_url = this.news_url + this.url;
    console.log(endpoint_url);
    console.log(this.http.get(endpoint_url));

    return this.http.get(this.url);
    // return this.http.get(`https://newsapi.org/v2/top-headlines?' + 'country=us' + '&apiKey=${this.API_KEY}`);
  }

  public getTranslations(text: string) {
    return this.http.post(this.baseTranslaionUrl+'/language/translate/v2', text);
  }

  public getSupportedLanguage(){
    // GET /v3/{parent=projects/*}/supportedLanguages
  }

  public getMock(){
    return "test";
  }
  
}

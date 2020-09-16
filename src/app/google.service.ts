import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  gurl = "https://cloud.google.com/translate/docs/reference/rest#service-endpoint";

  constructor(private http: HttpClient) { }

  public getGoogle() {
    return this.http.get(this.gurl);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles = '';
  gtest = '';
  search = new FormControl('');
  browse= false;
  results = '';

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.apiService.getNews().subscribe(
      (data) => {
        console.log(data);
        this.articles = data['articles'];
    });
    this.http.get('https://translation.googleapis.com').subscribe(
      (data) => {
        console.log(data);
        this.gtest = data['gtest'];
    });
  }

  getArticle() {
    // add search on News API
    console.log(this.search.value);
    // this.article.split(' ');
  }

  browseToggle() {
    this.browse = !this.browse;
    console.log(this.browse);
  }

}

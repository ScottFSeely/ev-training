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
  buttonText = "Browse Articles";
  private result = false;

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
  }

  getArticle() {
    // add search on News API
    console.log(this.search.value);
    // this.article.split(' ');
  }

  searchArticles(article_title) {
    this.result = false;
      for (let word of article_title) {
        if (word == this.search) {
          // display if result is true
          this.result = true;
        }
      }
  }

  browseToggle() {
    this.browse = !this.browse;
    if (this.browse) {
      this.buttonText = "Hide Articles";
      console.log(this.buttonText);
    } else {
      this.buttonText = "Show Articles";
      console.log(this.buttonText);
    }
    console.log(this.browse);
    return this.browse;
  }

}
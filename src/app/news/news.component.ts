import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiService } from '../api.service';
// import { MessageService } from '../message.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles;

  constructor(
    private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe(
      (data) => {
        console.log(data);
        this.articles = data['articles'];
    });
  }

}

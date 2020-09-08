import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiService } from '../api.service';

// import { MessageService } from '../message.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  articles;
  search;
  values = '';
  name = new FormControl('');

  constructor(
    private apiService: ApiService,
    private http: HttpClient) { }



  ngOnInit() {
    this.apiService.getNews().subscribe(
      (data) => {
        console.log(data);
        this.articles = data['articles'];
    });
  }

  // post request submit backend client side program vs client server program static but you need to store information in a db if it is dynamic

  // getArticle() {
  //   var search = document.getElementById('article_name_search').nodeValue;
  //   console.log(search)
  //   // let input = this.http.get.subscribe(document.getElementById('article_name_search'))
  //   // let input = document.getElementById('article_name_search');
  //   // return input
    
  // }

  getArticle() {
    // this.search = document.getElementById("article_name_search");
    console.log(this.name);
    console.log(this.search);
    // var this.search = document.getElementById('article_name_search');
    // console.log(search);
    // console.log("hi");
  }
  onKey(event: any) {
    this.values = event.target.value + ' | '
  } 

  testVal(){
    console.log("testing");
  }

  profileForm() {

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [
    './heroes.component.scss', 
    '../app.component.scss'
  ]
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}

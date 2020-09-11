import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: [
    './first.component.scss'
  ]
})
export class FirstComponent implements OnInit, OnDestroy {
  val0 = "value0";

  constructor() {
    console.log('I am in the constructor of FirstComponent');
    var val1= "value1";
    console.log(this.val0)
   }

  ngOnInit(): void {
    console.log('I am in the ngOnInit method of FirstComponent');
    var val2 = "value2";
    console.log(this.val0);
  }

  ngOnDestroy() {
    console.log("I destroy!");
  }

}

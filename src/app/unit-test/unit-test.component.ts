import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.scss']
})
export class UnitTestComponent implements OnInit {

  boolVal = true;
  subscription: Subscription;

  constructor() {
    class Calculator {

    }
  }

  ngOnInit(): void {
  }

  toggleAsync() {
    this.subscription = timer(500).subscribe(() => {
      this.boolVal = !this.boolVal;
    });
    this.subscription.unsubscribe();
  }

  testFun() {
    console.log('unit test method worked');
  }

}
class Calculator {

}


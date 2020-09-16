import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gtranslate',
  templateUrl: './gtranslate.component.html',
  styleUrls: ['./gtranslate.component.scss']
})
export class GTranslateComponent implements OnInit {
  words = "Translate me!";
  public subscription;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    console.log("subscribing");
    this.subscription = this.apiService.getTr(this.words).subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log(this.subscription.unsubscribe());
  }

  testMethod(text: string) {
    this.apiService.getTr(text);
  }


}

// packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// my components
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PageNotFoundComponent,
    TourOfHeroesComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    MessagesComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

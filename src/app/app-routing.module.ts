import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'tour-of-heroes', component: TourOfHeroesComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tour-of-heroes/heroes', component: HeroesComponent},
  { path: 'tour-of-heroes/dashboard', component: DashboardComponent },
  
  // { path: '', redirectTo: 'path', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

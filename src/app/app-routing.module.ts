import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { WeatherSummaryPageComponent } from './weather-summary-page/weather-summary-page.component';


const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  },
  {
    path: 'location/:woeid',
    component: WeatherSummaryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { MetaWeatherService } from '../meta-weather-service';
import { Router } from '@angular/router';
import { MetaLocation } from '../metalocation.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public locString = '';

  constructor(
    private metaWeather: MetaWeatherService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchForLocation() {
    this.metaWeather.getLocation(this.locString)
      .subscribe(loc => {
        console.log('Location Info: ', loc);
        this.router.navigate(['location', loc.woeid]);
      });
  }
}

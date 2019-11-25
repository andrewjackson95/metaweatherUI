import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaWeatherService } from '../meta-weather-service';
import { MetaLocation, LocationWeather, WeatherInfo } from '../metalocation.model';

@Component({
  selector: 'app-weather-summary-page',
  templateUrl: './weather-summary-page.component.html',
  styleUrls: ['./weather-summary-page.component.css']
})
export class WeatherSummaryPageComponent implements OnInit {

  constructor(
    private metaWeather: MetaWeatherService,
    private aR: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSummary();
  }

  public weatherData: LocationWeather;
  public today: WeatherInfo;

  getSummary() {
    this.metaWeather.getLocationWoeid(this.aR.snapshot.params.woeid)
      .subscribe(wData => {
        console.log('Location Info: ', wData);
        const [dayOne, ...theRest] = wData.consolidated_weather;
      
        wData.consolidated_weather = theRest;
        this.weatherData = wData;
        this.today = dayOne;
      });
  }
}

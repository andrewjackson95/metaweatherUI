import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MetaLocation, LocationWeather } from './metalocation.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class MetaWeatherService {

  constructor(private http: HttpClient) { }

  getLocation(locString: string): Observable<MetaLocation> {
    return this.http.get<MetaLocation[]>(
      'https://www.metaweather.com/api/location/search/?query=' + locString)
      .pipe(map(x => x[0]));
  };

  getLocationWoeid(locId): Observable<LocationWeather> {
    return this.http.get<LocationWeather>('https://www.metaweather.com/api/location/' + locId)
  };
}
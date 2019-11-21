import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MetaLocation, LocationWeather } from './metalocation.model';

@Injectable({
  providedIn: 'root'
})
export class MetaWeatherService {

  constructor(private http: HttpClient) { }

  getLocation(locString: string): Observable<MetaLocation[]> {
    return this.http.get<MetaLocation[]>(
      'https://www.metaweather.com/api/location/search/?query=' + locString)
  };

  getLocationWoeid(locId): Observable<LocationWeather>{
    return this.http.get<LocationWeather>('https://www.metaweather.com/api/location/' + locId)
  };
}
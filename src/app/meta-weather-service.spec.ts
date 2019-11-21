import { TestBed } from '@angular/core/testing';

import { MetaWeatherService } from './meta-weather-service';

describe('MetaWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaWeatherService = TestBed.get(MetaWeatherService);
    expect(service).toBeTruthy();
  });
});

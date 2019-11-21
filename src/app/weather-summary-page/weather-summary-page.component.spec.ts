import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSummaryPageComponent } from './weather-summary-page.component';

describe('WeatherSummaryPageComponent', () => {
  let component: WeatherSummaryPageComponent;
  let fixture: ComponentFixture<WeatherSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

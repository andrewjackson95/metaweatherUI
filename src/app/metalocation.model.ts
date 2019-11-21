export interface MetaLocation{
    latt_long: string;
    location_type: string;
    title: string;
    woeid: number;
}

export interface LocationWeather {
    consolidated_weather: WeatherInfo[];
    time: Date;
    sun_rise: Date;
    sun_set: Date;
    timezone_name: string;
    parent: MetaLocation;
    sources: WeatherSource[];
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
    timezone: string;
}

export interface WeatherSource {
    title: string;
    slug: string;
    url: string;
    crawl_rate: number;
}

export interface WeatherInfo {
    id: any;
    weather_state_name: string;
    weather_state_abbr: string;
    wind_direction_compass: string;
    created: Date;
    applicable_date: string;
    min_temp: number;
    max_temp: number;
    the_temp: number;
    wind_speed: number;
    wind_direction: number;
    air_pressure: number;
    humidity: number;
    visibility: number;
    predictability: number;
}

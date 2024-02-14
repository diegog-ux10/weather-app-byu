import { Weather } from "./city";
import { Day } from "./day";

export type Forecast = {
    lat:             number;
    lon:             number;
    timezone:        string;
    timezone_offset: number;
    current:         Current;
    minutely:        Minutely[];
    hourly:          Current[];
    daily:           Day[];
}

export type Current = {
    dt:         number;
    sunrise?:   number;
    sunset?:    number;
    temp:       number;
    feels_like: number;
    pressure:   number;
    humidity:   number;
    dew_point:  number;
    uvi:        number;
    clouds:     number;
    visibility: number;
    wind_speed: number;
    wind_deg:   number;
    weather:    Weather[];
    wind_gust?: number;
    pop?:       number;
    rain?:      Rain;
}

export type Rain = {
    "1h": number;
}



export enum Description {
    BrokenClouds = "broken clouds",
    FewClouds = "few clouds",
    LightRain = "light rain",
    ModerateRain = "moderate rain",
    OvercastClouds = "overcast clouds",
    ScatteredClouds = "scattered clouds",
}

export enum Main {
    Clouds = "Clouds",
    Rain = "Rain",
}


export type Minutely = {
    dt:            number;
    precipitation: number;
}
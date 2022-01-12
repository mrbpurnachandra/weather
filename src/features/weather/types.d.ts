interface Coordinate {
  lat: number;
  lon: number;
}

interface WeatherBlock {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeatherParams {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherAPIResponse {
  coord: Coordinate;
  weather: WeatherBlock[];
  base: String;
  main: MainWeatherParams;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

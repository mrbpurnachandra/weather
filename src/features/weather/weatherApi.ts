import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    weather: builder.query<WeatherAPIResponse, Coordinate>({
      query: (coordinate) =>
        `weather?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${APP_KEY}`,
    }),
  }),
});

const APP_KEY = "a191996a8266a1ed7b1114c567289535";

export const { useWeatherQuery } = weatherApi;

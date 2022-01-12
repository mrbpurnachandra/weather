import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Weather from "./features/weather/Weather";

export default function App() {
  const [lat, lon] = useGeolocation();
  return (
    <main className="max-w-md mx-auto">
      <div className="text-center mt-2 w-96 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700">
          Welcome to the weather app!
        </h2>
        <p className="text-sm text-gray-600">
          This app reads your geolocation and shows the weather condition of
          your location.
        </p>
      </div>
      {!lat && (
        <div className="text-center bg-indigo-100 rounded-lg mt-4">
          <p className=" py-8 text-sm text-gray-600">
            Please allow location to use this app.
          </p>
        </div>
      )}
      {lat && lon && <Weather lat={lat} lon={lon} />}

      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Created with <FavoriteIcon className="text-red-600" /> by{" "}
          <a
            href="https://twitter.com/purnachandra057"
            target="_blank"
            className="font-semibold text-indigo-500"
          >
            Prakash Bhattarai
          </a>
        </p>
      </div>
    </main>
  );
}

function useGeolocation() {
  const [geoCoordinate, setGeoCoordinate] =
    useState<GeolocationCoordinates | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeoCoordinate(position.coords);
    });
  }, []);

  return [geoCoordinate?.latitude, geoCoordinate?.longitude];
}

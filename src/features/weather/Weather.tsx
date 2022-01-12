import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import { useWeatherQuery } from "./weatherApi";
import date from "date-and-time";

interface Props {
  lat: number;
  lon: number;
}

export default function Weather({ lat, lon }: Props) {
  const { data, error, isLoading } = useWeatherQuery({ lat, lon });
  console.log(data);

  if (isLoading)
    return (
      <div className="text-center bg-indigo-100 rounded-lg mt-4">
        <p className=" py-8 text-sm text-gray-600">Loading...</p>
      </div>
    );
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="bg-indigo-100 rounded-xl p-6 mt-4">
      <div className="text-center">
        <p className="text-4xl text-indigo-500">Today's Weather</p>
        <p className="text-sm text-indigo-500">{currentDate()}</p>
      </div>

      <div className="mt-6 text-center">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 bg-indigo-500 rounded-full p-1">
            <img
              src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
              alt={data?.weather[0].main}
            />
          </div>
          <div className="mt-3 inline-flex items-baseline">
            <p className="text-4xl font-semibold text-indigo-600">
              {data?.main.temp} K
            </p>
            <span className="ml-2 text-indigo-400">
              {data?.weather[0].main}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-indigo-600 rounded-xl p-3 flex justify-evenly">
        <div className="p-2 text-sm bg-indigo-800 text-gray-300 rounded-lg flex flex-col items-center">
          <VisibilityIcon />
          <div className="flex flex-col items-center">
            <span className="text-base font-semibold">
              {data?.visibility} m
            </span>
            <span className="font-semibold uppercase">Visibility</span>
          </div>
        </div>
        <div className="p-2 text-sm bg-indigo-800 text-gray-300 rounded-lg flex flex-col items-center">
          <AirIcon />
          <div className="flex flex-col items-center">
            <span className="text-base font-semibold">
              {data?.wind.speed} m/s
            </span>
            <span className="font-semibold uppercase">Air</span>
          </div>
        </div>
        <div className="p-2 text-sm bg-indigo-800 text-gray-300 rounded-lg flex flex-col items-center">
          <OpacityIcon />
          <div className="flex flex-col items-center">
            <span className="text-base font-semibold">
              {data?.main.humidity} %
            </span>
            <span className="font-semibold uppercase">Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function currentDate() {
  return date.format(new Date(), "dddd, DD MMMM YYYY");
}

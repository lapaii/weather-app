import { getWeatherData, geocoder } from "@/app/lib/data";
import ConditionsCard from "@/app/ui/conditionsCard";
import PlaceHeader from "@/app/ui/placeHeader";
import SunTimesCard from "@/app/ui/sunTimesCard";
import TemperatureCard from "@/app/ui/temperatureCard";
import WindCard from "@/app/ui/windCard";
import HourlyCard from "@/app/ui/hourlyCard";

export default async function Page({ params }: { params: { placeName: string } }) {
    const placeNameFromURL = params.placeName;

    const { lat, lon, name, country } = (await geocoder(placeNameFromURL))[0];

    const { timezone_offset, current, hourly, daily } = await getWeatherData(lat, lon);

    const { sunrise, sunset, temp, feels_like, weather, wind_speed, wind_gust, wind_deg } = current;

    return (
        <main className="h-dvh w-dvw p-5 text-white flex flex-col items-center ">
            <div className="w-3/4 m-2.5">
                <PlaceHeader placeName={ name } country={ country }/>
                <div className="flex flex-col">
                    <div className="flex m-2.5 flex-row items-stretch">
                        <HourlyCard data={ hourly } timezone_offset={ timezone_offset } />
                    </div>
                    <div className="flex m-2.5 flex-row items-stretch">
                        <div className="w-1/2">
                            <TemperatureCard temp={ temp } feels_like={ feels_like } />
                        </div>
                        <div className="w-1/2">
                            <ConditionsCard data={ weather[0] } />
                        </div>
                    </div>
                    <div className="flex m-2.5 flex-row items-stretch">
                        <div className="w-1/2">
                            <WindCard speed={ wind_speed } gust={ wind_gust } deg={ wind_deg }/>
                        </div>
                        <div className="w-1/2">
                            <SunTimesCard rise={ sunrise } set={ sunset } timezone={ timezone_offset }/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
import { getWeatherData } from "@/app/lib/data";
import ConditionsCard from "@/app/ui/conditionsCard";
import PlaceHeader from "@/app/ui/placeHeader";
import SunTimesCard from "@/app/ui/sunTimesCard";
import TemperatureCard from "@/app/ui/temperatureCard";
import WindCard from "@/app/ui/windCard";

export default async function Page({ params }: { params: { placeName: string } }) {
    const placeNameFromURL = params.placeName;

    const { name, sys, main, weather, wind, timezone } = await getWeatherData(placeNameFromURL);

    const country = sys['country']

    return (
        <main className="h-dvh w-dvw p-5 text-white flex flex-col items-center ">
            <div className="w-3/4 m-2.5">
                <PlaceHeader placeName={ name } country={ country }/>
                <div className="flex flex-col">
                    <div className="flex m-2.5 flex-row items-stretch">
                        <div className="w-1/2">
                            <TemperatureCard data={ main }/>
                        </div>
                        <div className="w-1/2">
                            <ConditionsCard data={ weather[0] }/>
                        </div>
                    </div>
                    <div className="flex m-2.5 flex-row items-stretch">
                        <div className="w-1/2">
                            <WindCard data={ wind }/>
                        </div>
                        <div className="w-1/2">
                            <SunTimesCard data={ sys } timezone={ timezone }/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
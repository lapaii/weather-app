import { formatHours } from "../lib/stuff";

export default function HourlyCard({ data, timezoneOffset }: { data: Array<hourlyWeather>, timezoneOffset: number }) {
    const hours = data.map((hour) => 
        <div key={hour.dt} className="flex flex-col backdrop-blur-xl bg-white bg-opacity-35 mx-2.5 p-[1.875rem] rounded-xl text-center">
            <h1 className="text-2xl py-1.5">{ formatHours(new Date((hour.dt * 1000) + (timezoneOffset * 1000))) }</h1>
            <img className="py-2.5 mx-auto scale-[2]" src={ `http://openweathermap.org/img/wn/${ hour.weather[0].icon }.png` } alt={ hour.weather[0].main }/>
            <h1 className="text-xl py-1.5">{Math.round(hour.temp)}°</h1>
        </div>
        )

    return (
        <div className="flex h-full w-full backdrop-blur-xl bg-white drop-shadow-xl bg-opacity-25 p-[50px] rounded-3xl text-center flex-row justify-center">
            <div className="flex flex-row justify-start overflow-auto">
                { hours }
            </div>
        </div>
    );
}
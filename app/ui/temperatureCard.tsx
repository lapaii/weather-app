export default function TemperatureCard({ temp, feels_like }: temperatureTypes) {
    return (
        <div className="m-2.5 flex h-full backdrop-blur-xl bg-white drop-shadow-xl bg-opacity-25 p-[50px] rounded-3xl text-center flex-col justify-center">
            <h1 className="text-3xl drop-shadow-xl">Temperature</h1>
            <h1 className="text-xl drop-shadow-sm">Current: { Math.round(temp) }°C</h1>
            <h1 className="text-xl drop-shadow-sm">Feels like: { Math.round(feels_like) }°C</h1>
        </div>
    );
}
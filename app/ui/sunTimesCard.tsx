import { formatDate } from "../lib/stuff";

export default function SunTimesCard({ data, timezone }: { data: { sunrise: number, sunset: number }, timezone: number }) {
    const { sunrise, sunset } = data;

    return (
        <div className="m-2.5 flex h-full backdrop-blur-xl bg-white drop-shadow-xl bg-opacity-25 p-[50px] rounded-3xl text-center flex-row justify-center">
            <div className="w-1/2 justify-center flex flex-col">
                <h1 className="text-3xl drop-shadow-xl">Sun Times</h1>
                <h1 className="text-xl drop-shadow-sm">Sunrise: { formatDate(new Date((sunrise * 1000) + (timezone * 1000))) }</h1>
                <h1 className="text-xl drop-shadow-sm">Sunset: { formatDate(new Date((sunset * 1000) + (timezone * 1000))) }</h1>
            </div>
        </div>
    )
}
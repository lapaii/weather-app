import { capitalizeWords } from "../lib/stuff";

export default function PlaceHeader({ placeName, country }: { placeName: string, country: string; }) {
    return (
        <div className="m-2.5 backdrop-blur-xl bg-white drop-shadow-xl bg-opacity-25 p-[50px] rounded-3xl text-center flex-col justify-center">
            <h1 className="text-3xl drop-shadow-sm">Weather for { capitalizeWords(placeName) }, { capitalizeWords(country) }</h1>
        </div>
    );
}
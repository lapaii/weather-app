import { capitalizeWords } from "../lib/stuff";

export default function ConditionsCard({ data }: { data: { id: number; main: string; description: string; icon: string; }}) {
    const { main, description, icon } = data;
    
    return (
        <div className="m-2.5 h-full flex backdrop-blur-xl bg-white drop-shadow-xl bg-opacity-25 p-[50px] rounded-3xl text-center align-center flex-col justify-center">
            <img className="mx-auto scale-150" src={ `http://openweathermap.org/img/wn/${ icon }.png` } alt={ main }/>
            <h1 className="text-4xl drop-shadow-xl">{ main }</h1>
            <h1 className="text-2xl drop-shadow-sm">{ capitalizeWords(description) }</h1>
        </div>
    );
}
export default function WindCard({ speed, deg, gust }: windTypes) {
    if (!gust) {
        return (
            <div className="m-2.5 flex h-full backdrop-blur-xl bg-white drop-shadow-xl bg-opacity-25 p-[50px] rounded-3xl text-center flex-row justify-center">
                <div className="w-1/2 justify-center flex flex-col">
                    <h1 className="text-3xl drop-shadow-xl">Wind</h1>
                    <h1 className="text-xl drop-shadow-sm">Speed: { Math.round(speed) }m/s</h1>
                    <h1 className="text-xl drop-shadow-sm">Direction: { deg }°</h1>
                </div>
            </div>
        );
    } else {
        return (
            <div className="m-2.5 flex h-full backdrop-blur-xl bg-white drop-shadow-xl bg-opacity-25 p-[50px] rounded-3xl text-center flex-row justify-center">
                <div className={`w-1/2 justify-center flex flex-col`}>
                    <h1 className={`text-3xl drop-shadow-xl`}>Wind</h1>
                    <h1 className="text-xl drop-shadow-sm">Speed: { Math.round(speed) }m/s</h1>
                    <h1 className="text-xl drop-shadow-sm">Gust: { Math.round(gust) }m/s</h1>
                    <h1 className="text-xl drop-shadow-sm">Direction: { deg }°</h1>
                </div>
            </div>
        );
    }
}
import SearchBar from "./ui/searchbar";

export default async function Home() {

  return (
    <main className="h-dvh w-dvw p-5 text-white flex flex-col items-center justify-center">
      <div className="backdrop-blur-xl bg-white drop-shadow-xl bg-opacity-25 p-[50px] rounded-3xl text-center flex-col justify-center">
        <h1 className="text-3xl drop-shadow-sm">Weather</h1>
        <SearchBar/>
      </div>
    </main>
  );
}
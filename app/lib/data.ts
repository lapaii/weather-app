import { unstable_noStore as noStore } from "next/cache";

export async function getWeatherData(placeName: string) {
    noStore();

    const apiKey = process.env.API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=${apiKey}&units=metric`;

    var temp;

    try {
        const response = await fetch(url);
            
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        //await new Promise(resolve => setTimeout(resolve, 3000));
            
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
    
    return temp;
}
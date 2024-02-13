import { unstable_noStore as noStore } from "next/cache";

const apiKey = process.env.API_KEY;
const geocodeLimit = 5;

export async function geocoder(placeName: string) {
    noStore();

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&limit=${geocodeLimit}&appid=${apiKey}`

    return await makeRequest(url)
}

export async function getWeatherData(lat: number, lon: number) {
    noStore();

    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=metric`

    return await makeRequest(url);
}

async function makeRequest(url: string) {
    try {
        const response = await fetch(url);
            
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        //await new Promise(resolve => setTimeout(resolve, 3000));
            
        return response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
}
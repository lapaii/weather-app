interface sunTimes {
    rise: number,
    set: number,
    timezone: number
}

interface windTypes {
    speed: number,
    deg: number,
    gust: number
}

interface temperatureTypes {
    temp: number,
    feelsLike: number
}

interface hourlyWeather {
    dt: number,
    temp: number,
    feelsLike: number,
    pressure: number,
    humidity: number,
    dewPoint: number,
    uvi: number,
    clouds: number,
    visibility: number,
    windSpeed: number,
    windGust: number,
    windDeg: number,
    pop: number,
    rain: {
        "1h": number
    },
    snow: {
        "1h": number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ]
}
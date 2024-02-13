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
    feels_like: number
}

interface hourlyTypes {
    data: hourlyWeather[]
}

interface hourlyWeather {
    dt: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_gust: number,
    wind_deg: number,
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
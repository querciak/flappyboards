import type { ContentItem } from "@/types";

export async function fetchWeather(lat: number, lon: number): Promise<ContentItem | null> {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=46.1667&longitude=9.8333&current_weather=true`);
    if (!res.ok) return null;
    const data = await res.json();
    const cw = data.current_weather;
    
    // Very basic weather code to string
    const code = cw.weathercode;
    let cond = "CLEAR";
    if (code >= 1 && code <= 3) cond = "PARTLY CLOUDY";
    if (code >= 45 && code <= 48) cond = "FOG";
    if (code >= 51 && code <= 55) cond = "DRIZZLE";
    if (code >= 61 && code <= 65) cond = "RAIN";
    if (code >= 71 && code <= 75) cond = "SNOW";
    if (code >= 95) cond = "THUNDERSTORM";

    return {
      id: "weather-caiolo",
      type: "weather",
      lines: [
        " CAIOLO (LILO) COND",
        "",
        ` TEMP: ${cw.temperature} C`,
        ` WIND: ${cw.windspeed} KM/H`,
        ` COND: ${cond}`,
        "",
      ],
    };
  } catch {
    return null;
  }
}

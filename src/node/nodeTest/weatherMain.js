import weather from "./text.json";

function degrees(num){
	var val = Math.floor((num/22.5)+.5)
    var arr=[
    	"N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    return arr[val%16];
}

module.exports = {
	temp: weather.main.temp,
	metric: true,
	status: weather.weather[0].id,
	wind: weather.wind.speed,
	windDir: degrees(weather.wind.deg),
	day: true
}

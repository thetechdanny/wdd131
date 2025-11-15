document.getElementById("lastModified").innerHTML = document.lastModified;

const year = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = year;

let temperature = 30;
let windSpeed = 7;

document.getElementById("temperaturevalue").innerHTML = `${temperature} °F`;
document.getElementById("windvalue").innerHTML = `${windSpeed} mph`;
document.getElementById("conditionvalue").innerHTML = "Partly Cloudy";

let windChill = (temp, speed) => {
    if (temp > 50 || speed <= 3) {
        return "N/A";
    }

    else {
        return Math.round(35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16))) + " °F";
    }
}

document.getElementById("windchillvalue").innerHTML = `${windChill(temperature, windSpeed)}`;
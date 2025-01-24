document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    const temp = parseFloat(document.getElementById('temp').textContent);
    const speed = parseFloat(document.getElementById('speed').textContent);
    const windChill = calculateWindChill(temp, speed);

    if (temp <= 10 && speed > 4.8) {
        document.getElementById('windchill').textContent = windChill + ' °C';
    } else {
        document.getElementById('windchill').textContent = 'N/A';
    }
});

function calculateWindChill(temp, speed) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16));
}

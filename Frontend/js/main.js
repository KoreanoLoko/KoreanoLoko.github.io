//Leaflet
var map = L.map('map').setView([-36.823156479798506, -73.05089838203006], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//Año actual
const year = document.getElementById('year')
year.innerHTML = new Date().getFullYear();
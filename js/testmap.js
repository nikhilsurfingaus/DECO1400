//Access API key to make use of Leaflet Google Maps API
const apiKey = 'pk.eyJ1IjoibmlraGlsc3VyZmluZ2F1cyIsImEiOiJja25wbWJobmEwMGo5Mm9vZ3V4aHIya3R3In0.QpBFSgDd4HHb3nY8IiKqsw';

//Initial Zoom level and location of map on first arrival
const mymap = L.map('map').setView([-20.354297, 148.955238], 14);

//Access mapbox using API key setting display of map style
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

// Adding Marker on map
const marker = L.marker([-20.354654, 148.949907]).addTo(mymap);

// Add popup message to marker
let template = `
<h3>Plane Spotting</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Aviation/AVGallary/av2.jpg"/>
</div>
`
//Add marker to map
marker.bindPopup(template);

// Adding Marker on map
const marker1 = L.marker([-20.355145, 148.951457]).addTo(mymap);

// Add popup message to marker
let template1 = `
<h3>Sky Diving</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Aviation/dive2.jpg"/>
</div>
`

//Add marker to map
marker1.bindPopup(template1);


// Add popup message to marker
const marker2 = L.marker([-20.355459, 148.951121]).addTo(mymap);

// Add popup message to marker
let template2 = `
<h3>Fighter Jet Ride</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Aviation/fight2.jpg"/>
</div>
`

//Add marker to map
marker2.bindPopup(template2);


// Adding Marker on map
const marker3 = L.marker([-20.356850, 148.962252]).addTo(mymap);

// Add popup message
let template3 = `
<h3>Beginner Surfing</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Water/WaterGallary/7.jpg"/>
</div>
`

//Add marker to map
marker3.bindPopup(template3);

// Adding Marker on map
const marker4 = L.marker([-20.362957, 148.969540]).addTo(mymap);

// Add popup message
let template4 = `
<h3>Intermediate Surfing</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Water/WaterGallary/4.jpg"/>
</div>
`

//Add marker to map
marker4.bindPopup(template4);

// Adding Marker on map
const marker5 = L.marker([-20.364950, 148.976955]).addTo(mymap);

// Add popup message
let template5 = `
<h3>Proffesional Surfing</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Water/WaterGallary/2.jpg"/>
</div>
`

//Add marker to map
marker5.bindPopup(template5);


// Add circle on map
const circle = L.circle([-20.345358, 148.949265], {
    radius:200, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('Pier Fishing')


// Adding Marker on map
const marker6 = L.marker([-20.368140, 148.961527]).addTo(mymap);

// Add popup message
let template6 = `
<h3>Deep Sea Fishing</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Water/WaterGallary/11.jpg"/>
</div>
`

//Add marker to map
marker6.bindPopup(template6);

// Adding Marker on map
const marker7 = L.marker([-20.346403, 148.981814]).addTo(mymap);

// Add popup message
let template7 = `
<h3>Rock Fishing</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Water/WaterGallary/14.jpg"/>
</div>
`

//Add marker to map
marker7.bindPopup(template7);

// Adding Marker on map
const marker8 = L.marker([-20.359208, 148.956185]).addTo(mymap);

// Add popup message
let template8 = `
<h3>Go Kart Track</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Family/FamilyGallary/k5.jpg"/>
</div>
`

//Add marker to map
marker8.bindPopup(template8);

//Add ciricle to map
const circle1 = L.circle([-20.351586, 148.962528], {
    radius:350, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('Family Trail Walk')

// Adding Marker on map
const marker9 = L.marker([-20.348620, 148.958049]).addTo(mymap);

// Add popup message
let template9 = `
<h3>Mini Golf</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Family/FamilyGallary/g2.jpg"/>
</div>
`

//Add marker to map
marker9.bindPopup(template9);

// Adding Marker on map
const marker10 = L.marker([-20.348391, 148.959521]).addTo(mymap);

// Add popup message
let template10 = `
<h3>Kids Club</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Family/FamilyGallary/f5.jpg"/>
</div>
`

//Add marker to map
marker10.bindPopup(template10);

// Adding Marker on map
const marker11 = L.marker([-20.345048, 148.948314]).addTo(mymap);

// Add popup message
let template11 = `
<h3>Street Food Market</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Food/FoodGallary/9.jpg"/>
</div>
`

//Add marker to map
marker11.bindPopup(template11);

// Adding Marker on map
const marker12 = L.marker([-20.345179, 148.949215]).addTo(mymap);

// Add popup message
let template12 = `
<h3>Food Trucks</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Food/FoodGallary/4.jpg"/>
</div>
`

//Add marker to map
marker12.bindPopup(template12);

//Add circle to map
const circle2 = L.circle([-20.345876, 148.951297], {
    radius:200, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('Resturants')

// Adding Marker on map
const marker13 = L.marker([-20.356964, 148.932910]).addTo(mymap);

// Add popup message
let template13 = `
<h3>Golf Course</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Sport/Sport Gallary/g7.jpg"/>
</div>
`

//Add marker to map
marker13.bindPopup(template13);

// Adding Marker on map
const marker14 = L.marker([-20.342939, 148.954879]).addTo(mymap);

// Add popup message
let template14 = `
<h3>Soccer Ground</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Sport/SportPreview.jpg"/>
</div>
`

//Add marker to map
marker14.bindPopup(template14);

const marker15 = L.marker([-20.360309, 148.957149]).addTo(mymap);

// Add popup message
let template15 = `
<h3>Animal Sanctuary</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Wildlife/WildlifeGallary/4.jpg"/>
</div>
`

//Add marker to map
marker15.bindPopup(template15);

// Adding Marker on map
const marker16 = L.marker([-20.344828, 148.955343]).addTo(mymap);

// Add popup message
let template16 = `
<h3>Pools</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Relax/pool1.jpg"/>
</div>
`

//Add marker to map
marker16.bindPopup(template16);

const marker17 = L.marker([-20.347374, 148.949588]).addTo(mymap);

// Add popup message
let template17 = `
<h3>Island Cruise</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Relax/cruise1.jpg"/>
</div>
`

//Add marker to map
marker17.bindPopup(template17);

//Add circle to map
const circle3 = L.circle([-20.346367, 148.956065], {
    radius:200, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('Nightclubs & Bars')

const marker18 = L.marker([-20.348352, 148.976232]).addTo(mymap);

// Add popup message
let template18 = `
<h3>Volanic Eruption Tours</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Resources/images/Night/vol1.jpg"/>
</div>
`

//Add marker to map
marker18.bindPopup(template18);
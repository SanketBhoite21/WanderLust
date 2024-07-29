// const map = L.map("map").setView([coordinates[1], coordinates[0]], 15); // Leaflet expects [lat, lng]
// L.tileLayer(
//   "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=kVWGsKVnEdpCe5lltUb4",
//   {
//     attribution:
//       '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
//   }
// ).addTo(map);

// // Add marker at the coordinates
// const marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);
console.log("map.js Coordinates:", coordinates);
// const map = L.map("map").setView(coordinates, 15);
// L.tileLayer(
//   "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=kVWGsKVnEdpCe5lltUb4",
//   {
//     attribution:
//       '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
//   }
// ).addTo(map);

// const marker = L.marker(coordinates).addTo(map);
if (coordinates && coordinates.length === 2) {
  // Initialize the map with the coordinates
  const map = L.map("map").setView([coordinates[1], coordinates[0]], 15);
  L.tileLayer(
    "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=kVWGsKVnEdpCe5lltUb4",
    {
      attribution:
        '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
    }
  ).addTo(map);

  // Add marker at the coordinates
  const redIcon = L.icon({
    iconUrl: "/images/marker-icon-red.png", // URL to the red marker icon
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 48], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -37], // point from which the popup should open relative to the iconAnchor
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png", // URL to the shadow image
    shadowSize: [41, 41], // size of the shadow
  });
  const marker = L.marker([coordinates[1], coordinates[0]], {
    icon: redIcon,
  }).addTo(map);
  marker.bindPopup("<b><i>Welcome to WanderLust !</i></b>").openPopup();
} else {
  console.error("Invalid coordinates:", coordinates);
}

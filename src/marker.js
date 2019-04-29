const mapboxgl = require("mapbox-gl");

const markerIcons = {
  activity: "http://i.imgur.com/WbMOfMl.png",
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png"
};

const marker = (iconKey, longLat, contId) => {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${markerIcons[iconKey]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(longLat).addTo(contId); // [-87.641, 41.895] for Chicago
};

module.exports = { marker };

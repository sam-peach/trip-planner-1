console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");
const { marker } = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FtLXBlYWNoIiwiYSI6ImNqdjJpcDRoYjI1c3A0M28wb2c3NW1iM2oifQ.qWTngVsoj6YlKdTri-Ygyg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

marker("activity", [-74.009, 40.705], map);
marker("restaurant", [-74.008, 40.705], map);

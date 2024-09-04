mapboxgl.accessToken =
 "pk.eyJ1IjoiYWRyaWVubmVyMTk4OCIsImEiOiJjbTBvNng4ZjkwNW04MnJweTNlOG83ZXh3In0.xiKv_Z8OOxYbW53zLT_fCw";

const successLocation = (position) => {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
};

const errorLocation = () => {
  setupMap([]);
};

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

const setupMap = (center) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: "metric",
    profile: "mapbox/cycling",
  });

  map.addControl(directions, "top-left");
};

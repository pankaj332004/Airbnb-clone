mapboxgl.accessToken = mapToken;

if (!coordinates) {
  // No geocoding data — show a world-level map without a marker
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0, 20],
    zoom: 1
  });
} else {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinates,
    zoom: 10
  });
  new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${locationName}</h3><p>Exact location provided after booking</p>`
      )
    )
    .addTo(map);
}
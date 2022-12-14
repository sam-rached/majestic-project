import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FtaXJhY2hlZCIsImEiOiJja3ljcWN4YjUwNWZlMm9zMjE1bGI2dW0xIn0.4UjM7N4eA-TqIlzCrMFXsw";

export default function Map() {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(55.32188);
  const [lat, setLat] = useState(25.26452);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Create default markers

    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          "<style> p {text-align:left}</style><p><strong>International Business Group</strong></p><p><small>Sheikh Ahmad Building - Al Maktoum</small></br><small> Rd - Deira - Dubai - Émirats arabes unis</small>"
        )
      )
      .addTo(map);

    marker.togglePopup();

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div className="map">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

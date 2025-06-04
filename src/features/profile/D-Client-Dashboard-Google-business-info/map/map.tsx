// import { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import './map.css'

// mapboxgl.accessToken = "pk.eyJ1IjoibWF4LXNodmV0czAwMSIsImEiOiJjbWJoZWZyYmowN215Mm1zYzN6djFqbnJpIn0.oLJC69oe3lu4aN9Y76u-cw";

// export default function MapComponent() {
//   const mapContainerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!mapContainerRef.current) return;

//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: "mapbox://styles/mapbox/streets-v11", 
//       center: [30.5238, 50.4547], 
//       zoom: 10,
//     });
//     new mapboxgl.Marker({ color: "red" }) 
//       .setLngLat([30.5238, 50.4547]) 
//       .addTo(map);

//     return () => map.remove(); 
//   }, []);

//   return (
//     <div
//       ref={mapContainerRef}
//       style={{ width: "100%", height: "500px", borderRadius: "8px" }}
//     />
//   );
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

mapboxgl.accessToken = "pk.eyJ1IjoibWF4LXNodmV0czAwMSIsImEiOiJjbWJoZWZyYmowN215Mm1zYzN6djFqbnJpIn0.oLJC69oe3lu4aN9Y76u-cw";

interface MapComponentProps {
  mapValue: string; // адреса з батька
}

export default function MapComponent({ mapValue }: MapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.5238, 50.4547],
      zoom: 10,
    });

    markerRef.current = new mapboxgl.Marker({ color: "red" })
      .setLngLat([30.5238, 50.4547])
      .addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  // Дебаунс для mapValue
  useEffect(() => {
    if (!mapValue) return;

    const handler = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            mapValue
          )}.json?access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();

        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;

          mapRef.current?.flyTo({ center: [lng, lat], zoom: 14 });

          if (markerRef.current) {
            markerRef.current.setLngLat([lng, lat]);
          } else {
            markerRef.current = new mapboxgl.Marker({ color: "red" })
              .setLngLat([lng, lat])
              .addTo(mapRef.current!);
          }
        }
      } catch (error) {
        console.error("Помилка геокодування:", error);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [mapValue]);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "500px", borderRadius: "8px", marginTop: 12 }}
    />
  );
}

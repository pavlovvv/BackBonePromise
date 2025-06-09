// import style from "./HeatMaps.module.sass";
// import { useEffect, useState } from "react";
// import Map, { Source, Layer } from "react-map-gl/mapbox";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { NavigationControl } from "react-map-gl/mapbox";

// const ACCESS_TOKEN =
// 	"pk.eyJ1IjoibWF4LXNodmV0czAwMSIsImEiOiJjbWJoZWZyYmowN215Mm1zYzN6djFqbnJpIn0.oLJC69oe3lu4aN9Y76u-cw";

// export default function HeatMaps() {
// 	const [geojson, setGeojson] = useState<any>(null);

//   useEffect(() => {
//     const data = {
//       type: "FeatureCollection",
//       features: [
//         // Київ — має більшу вагу
//         {
//           type: "Feature",
//           properties: { weight: 0.8 },
//           geometry: { type: "Point", coordinates: [30.5234, 50.4501] },
//         },
//         {
//           type: "Feature",
//           properties: { weight: 1 },
//           geometry: { type: "Point", coordinates: [30.5240, 50.4506] },
//         },
    
//         // Біла Церква — слабша вага
//         {
//           type: "Feature",
//           properties: { weight: 0.2 },
//           geometry: { type: "Point", coordinates: [30.1307, 49.8094] },
//         },
    
//         // Буча — середня вага
//         {
//           type: "Feature",
//           properties: { weight: 0.5 },
//           geometry: { type: "Point", coordinates: [30.2137, 50.5435] },
//         },
//       ],
//     };
    
//     setGeojson(data);
//   }, []);

// 	return (
// 		<div className={style.Trending}>
// 			<div className={style.Trending__container}>
// 				<div className={style.statistics}>
// 					<div className={style.statistics__block}>
// 						<div className={style["statistics__title-block"]}>
// 							<p>Last 30 days</p>
// 							<p>Highly viewed competitors</p>
// 						</div>
// 						<Map
// 							initialViewState={{ longitude: 30.5234, latitude: 50.4501, zoom: 10 }}
// 							style={{
// 								width: "100%",
// 								height: "500px",
// 								borderRadius: "8px",
// 								overflow: "hidden",
// 							}}
// 							mapStyle="mapbox://styles/mapbox/light-v10"
// 							mapboxAccessToken={ACCESS_TOKEN}
// 						>
// 							<NavigationControl position="top-left" />

// 							{geojson && (
// 								<Source id="heat" type="geojson" data={geojson}>
// 									<Layer
// 										id="heatmap-layer"
// 										type="heatmap"
                    
// 										paint={{
// 											"heatmap-intensity": 1.3,
// 											"heatmap-radius": 100,
// 											"heatmap-opacity": 0.75,
//                       "heatmap-weight": ["get", "weight"],
// 											"heatmap-color": [
// 												"interpolate",
// 												["linear"],
// 												["heatmap-density"],
// 												0,
// 												"rgba(0, 0, 0, 0)", // прозорий
// 												0.1,
// 												"#ccffcc", // світло-зелений
// 												0.3,
// 												"#9cff9c", // яскравіший зелений
// 												0.5,
// 												"#ffff66", // жовтий
// 												0.7,
// 												"#ff9900", // помаранчевий
// 												1,
// 												"#ff0000", // червоний
// 											],
// 										}}
// 									/>
// 								</Source>
// 							)}
// 						</Map>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import style from "./HeatMaps.module.sass";
import { useEffect, useState } from "react";
import Map, { Source, Layer, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const ACCESS_TOKEN = "pk.eyJ1IjoibWF4LXNodmV0czAwMSIsImEiOiJjbWJoZWZyYmowN215Mm1zYzN6djFqbnJpIn0.oLJC69oe3lu4aN9Y76u-cw";

export default function HeatMaps() {
  const [geojson, setGeojson] = useState<any>(null);

  useEffect(() => {
    const data = {
      type: "FeatureCollection",
      features: [
        // Центр Києва – червоне ядро
        {
          type: "Feature",
          properties: { weight: 1 },
          geometry: { type: "Point", coordinates: [30.5234, 50.4501] },
        },
        {
          type: "Feature",
          properties: { weight: 0.8 },
          geometry: { type: "Point", coordinates: [30.5245, 50.4505] },
        },

        // Навколишні — салатові зони
        {
          type: "Feature",
          properties: { weight: 0.4 },
          geometry: { type: "Point", coordinates: [30.5200, 50.4510] },
        },
        {
          type: "Feature",
          properties: { weight: 0.4 },
          geometry: { type: "Point", coordinates: [30.5300, 50.4490] },
        },
        {
          type: "Feature",
          properties: { weight: 0.4 },
          geometry: { type: "Point", coordinates: [30.5270, 50.4520] },
        },
        {
          type: "Feature",
          properties: { weight: 0.4 },
          geometry: { type: "Point", coordinates: [30.5190, 50.4480] },
        },
        {
          type: "Feature",
          properties: { weight: 0.4 },
          geometry: { type: "Point", coordinates: [30.5180, 50.4525] },
        },
        {
          type: "Feature",
          properties: { weight: 0.4 },
          geometry: { type: "Point", coordinates: [30.5330, 50.4470] },
        },
        {
          type: "Feature",
          properties: { weight: 0.4 },
          geometry: { type: "Point", coordinates: [30.5160, 50.4530] },
        },
        {
          type: "Feature",
          properties: { weight: 0.4 },
          geometry: { type: "Point", coordinates: [30.5265, 50.4540] },
        },
      ],
    };
    setGeojson(data);
  }, []);

  return (
    <div className={style.Trending}>
      <div className={style.Trending__container}>
        <div className={style.statistics}>
          <div className={style.statistics__block}>
            <div className={style["statistics__title-block"]}>
              <p>Last 30 days</p>
              <p>Highly viewed competitors</p>
            </div>
            <Map
              initialViewState={{ longitude: 30.5234, latitude: 50.4501, zoom: 12 }}
              style={{ width: "100%", height: "500px" }}
              mapStyle="mapbox://styles/mapbox/light-v10"
              mapboxAccessToken={ACCESS_TOKEN}
            >
              <NavigationControl position="top-left" />

              {geojson && (
                <Source id="heat" type="geojson" data={geojson}>
                  <Layer
                    id="heatmap-layer"
                    type="heatmap"
                    paint={{
                      "heatmap-weight": ["get", "weight"],
                      "heatmap-intensity": 1,
                      "heatmap-radius": 70,
                      "heatmap-opacity": 0.8,
                      "heatmap-color": [
                        "interpolate",
                        ["linear"],
                        ["heatmap-density"],
                        0,
                        "rgba(0,0,0,0)",
                        0.05,
                        "#e0ffe0",  // світло-зелений
                        0.2,
                        "#b0f3b0",  // салатовий
                        0.4,
                        "#ffff66",  // жовтий
                        0.6,
                        "#ffaa00",  // помаранчевий
                        1,
                        "#ff0000",  // червоний
                      ],
                    }}
                  />
                </Source>
              )}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}

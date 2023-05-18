import React, { useEffect, useRef } from 'react';
import L, {LatLngBoundsLiteral} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './Map.css';

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && !mapRef.current.hasChildNodes()) {
      const map = L.map(mapRef.current, {
        zoomControl: false, // Disable the default zoom control
        attributionControl: false, // Disable the default attribution control
        crs: L.CRS.Simple,
        minZoom: 0,
        maxZoom: 5,
        zoomDelta: 0.2,
        zoomSnap: 0.2,
        // layers: [namedOverlays["focus"], namedOverlays["poifix"]],
      });

      const bounds: LatLngBoundsLiteral = [
        [-370, -342],
        [445, 475]
      ];

      L.imageOverlay('https://gamepedia.cursecdn.com/conanexiles_gamepedia/f/fb/MiniMapFull.jpg', bounds).addTo(map);

      L.control.zoom({ position: 'topright' }).addTo(map);

      L.control.attribution({ position: 'bottomright' })
          .addAttribution('Images/Icons © <a href="https://www.funcom.com/" target="_new">Funcom</a> | Source: <a href="https://conanexiles.gamepedia.com/" target="_new">Conan Exiles Wiki</a>')
          .addTo(map);

      map.fitBounds(bounds); // Fit the map view to the specified bounds
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.style.height = window.innerHeight + 'px';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mapRef} className="map-container" />;
}

export default Map;



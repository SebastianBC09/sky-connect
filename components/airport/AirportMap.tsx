import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconRetinaUrl: iconRetina.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface AirportMapProps {
  latitude: string;
  longitude: string;
}

const AirportMap: FC<AirportMapProps> = ({ latitude, longitude }) => {
  const latNum = parseFloat(latitude);
  const lonNum = parseFloat(longitude);

  if (isNaN(latNum) || isNaN(lonNum)) {
    return <p>Coordenadas inválidas</p>;
  }

  return (
    <div className="w-full h-[500px] relative">
      <MapContainer
        center={[latNum, lonNum]}
        zoom={10}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latNum, lonNum]}>
          <Popup>
            Ubicación del aeropuerto
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AirportMap;

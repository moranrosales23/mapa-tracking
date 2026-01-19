'use client'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ParamsData } from '../../interfaces/mapa.interface';
import L from 'leaflet';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH  ? process.env.NEXT_PUBLIC_BASE_PATH + '/' : '';
export default function Mapa({ params }: { params: ParamsData[] }) {
  const custom = L.icon({
  iconUrl: `${BASE_PATH}mark-red.png`,
  iconSize: [64, 64],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});
  return (
    
      <MapContainer 
        center={[params[0].latitude, params[0].longitude]} 
        zoom={18} 
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {params.map((param, index) => {
          
          return <Marker key={index} position={[param.latitude, param.longitude]} {...(index === 0 ? { icon: custom } : {})} >
            <Popup autoClose={false} closeOnClick={false} >
              <p>
                <strong>División:</strong> {param.nombre_division}
                <br />
                <strong>Patente / Bus:</strong> {param.patente} / {param.identification}
                <br />
                <strong>Velocidad:</strong> <strong>{param.velocidad_final} km/h</strong>
                <br />
                <strong>Fecha y Hora:</strong> {param.device_datetime}
                <br />
                {param.es_virlock !== undefined ? <><strong>Dispositivo:</strong> {param.es_virlock === 1 ? 'Virlock' : 'Stonkam'}</> : ''}
              </p>
            </Popup>
          </Marker> 
})}
      </MapContainer>
    
  );
}

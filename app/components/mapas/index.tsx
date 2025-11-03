'use client'
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(
  () => import('./mapa'),
  { 
    ssr: false, 
    loading: () => <p>Cargando mapa...</p>, 
  }
);
export default MapComponent;
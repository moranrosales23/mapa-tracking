'use client'
import { useSearchParams } from 'next/navigation';
import { ParamsData } from './interfaces/mapa.interface';
import MapComponent from './components/mapas';
import 'leaflet/dist/leaflet.css';
import pako from 'pako';
import { Buffer } from 'buffer';

export default function Home() {
  const searchParams = useSearchParams();
  const params: ParamsData[] = parseParams(searchParams.get('params'));
  function parseParams(paramString: string | null | undefined) {
    if (!paramString) return null;
    try {
        let base64 = paramString.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    const binaryData = Buffer.from(base64, 'base64');
        const decompressed = pako.inflate(binaryData, { to: 'string' });
        return JSON.parse(decompressed) ;
    } catch (e) {
        console.error("Error al decodificar:", e);
        return null;
    }
  }


  return (
    params ? <div style={{ height: '100vh', width: '100%' }} >
      <MapComponent params={params} />
  </div>: <div>No hay parámetros válidos proporcionados.</div>
  );
}

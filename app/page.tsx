'use client'
import { useSearchParams } from 'next/navigation';
import { ParamsData } from './interfaces/mapa.interface';
import MapComponent from './components/mapas';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  const searchParams = useSearchParams();
  const params: ParamsData[] = parseParams(searchParams.get('params'));
  console.log(params);
  function parseParams(paramString: string | null | undefined) {
    if (!paramString) return null;
    try {
        const base64 = paramString.replace(/-/g, '+').replace(/_/g, '/');
        const buffer = Buffer.from(base64, 'base64');
        const datos_json_str = buffer.toString('utf8');
        return JSON.parse(datos_json_str);
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

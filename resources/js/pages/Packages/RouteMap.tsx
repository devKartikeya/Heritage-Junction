import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';

export default function RouteMap({ points }: { points: any[] }) {
    // Guard against empty or undefined points
    if (!points || points.length === 0) {
        return (
            <div className="h-[400px] w-full flex items-center justify-center rounded-lg shadow-lg bg-gray-100 text-gray-600">
                No route points available.
            </div>
        );
    }

    return (
        <div className="h-[400px] w-full rounded-lg shadow-lg overflow-hidden">
            <MapContainer
                center={[points[0].lat, points[0].lng]}
                zoom={6}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {points.map((p, idx) => (
                    <Marker key={idx} position={[p.lat, p.lng]}>
                        <Popup>{p.name}</Popup>
                    </Marker>
                ))}
                <Polyline positions={points.map(p => [p.lat, p.lng])} color="purple" />
            </MapContainer>
        </div>
    );
}
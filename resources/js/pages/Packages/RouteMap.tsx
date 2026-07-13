import React from 'react'
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet'

export default function RouteMap({ points }: { points: { name: string, lat: number, lng: number }[] }) {
    return (
        <div className="h-[500px] w-full rounded-lg shadow-lg overflow-hidden">
            <MapContainer center={[22.97, 78.65]} zoom={5} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {points.map((p, idx) => (
                    <Marker key={idx} position={[p.lat, p.lng]}>
                        <Popup>{p.name}</Popup>
                    </Marker>
                ))}
                <Polyline positions={points.map(p => [p.lat, p.lng])} color="purple" />
            </MapContainer>
        </div>
    )
}
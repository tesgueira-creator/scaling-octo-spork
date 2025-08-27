"use client";
import MapView from '@/components/MapView';

/**
 * Map view for sightings. Delegates actual rendering to the MapView
 * component which will eventually cluster markers and allow interactions.
 */
export default function MapPage() {
  return (
    <div className="space-y-4">
      <MapView />
    </div>
  );
}
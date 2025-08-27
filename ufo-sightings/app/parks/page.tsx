"use client";
import MapView from '@/components/MapView';

/**
 * Parks page. Displays a list of parks and a map with POIs.
 */
export default function ParksPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Parks & Points of Interest</h1>
      <p className="text-gray-400">This page will list parks with nearby sightings and render a map of points of interest.</p>
      <MapView />
    </div>
  );
}
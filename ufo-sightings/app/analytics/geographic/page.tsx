"use client";
import MapView from '@/components/MapView';

/**
 * Geographic analytics page. Combines a heat map and ranking list.
 */
export default function GeographicAnalytics() {
  return (
    <div className="space-y-4">
      <MapView />
      {/* Additional charts or lists can be added here */}
    </div>
  );
}
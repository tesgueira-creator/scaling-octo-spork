"use client";
import { useDataset } from '@/components/DataProvider';
import { useState } from 'react';

/**
 * Card view for sightings. Renders each sighting in a compact card that
 * displays basic metadata and allows toggling description visibility.
 */
export default function CardView() {
  const { dataset, loading } = useDataset();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  if (loading) return <p>Loading sightings…</p>;
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {dataset.map((sighting) => (
        <div
          key={sighting.id}
          className="glass p-4 rounded-lg shadow cursor-pointer"
          onClick={() => setExpandedId(expandedId === sighting.id ? null : sighting.id)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">
              {sighting.city || 'Unknown'}, {sighting.state || sighting.country}
            </h3>
            <span className="text-xs text-gray-400">{new Date(sighting.date).toLocaleDateString()}</span>
          </div>
          <div className="text-sm text-gray-300 mt-1">
            Shape: {sighting.shape || 'Unknown'} | Duration: {sighting.duration ?? 'N/A'}s
          </div>
          {expandedId === sighting.id && (
            <p className="text-sm text-gray-200 mt-2 whitespace-pre-line">
              {sighting.description || 'No description provided.'}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
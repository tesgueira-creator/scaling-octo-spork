"use client";
import { useDataset } from '@/components/DataProvider';

/**
 * Table view for sightings. Utilises a simple HTML table as a placeholder.
 * A production implementation should leverage TanStack Table for features
 * like sorting, virtualisation and column visibility.
 */
export default function TableView() {
  const { dataset, loading } = useDataset();
  if (loading) return <p>Loading sightings…</p>;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-white/10">
          <tr className="text-gray-400">
            <th className="px-2 py-1">Date</th>
            <th className="px-2 py-1">Country</th>
            <th className="px-2 py-1">State</th>
            <th className="px-2 py-1">City</th>
            <th className="px-2 py-1">Shape</th>
            <th className="px-2 py-1">Duration</th>
            <th className="px-2 py-1">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {dataset.map((sighting) => (
            <tr key={sighting.id} className="border-b border-white/5 hover:bg-white/5">
              <td className="px-2 py-1 whitespace-nowrap">{new Date(sighting.date).toLocaleDateString()}</td>
              <td className="px-2 py-1">{sighting.country}</td>
              <td className="px-2 py-1">{sighting.state ?? '–'}</td>
              <td className="px-2 py-1">{sighting.city ?? '–'}</td>
              <td className="px-2 py-1">{sighting.shape ?? '–'}</td>
              <td className="px-2 py-1">{sighting.duration ?? '–'}</td>
              <td className="px-2 py-1">{sighting.confidence ?? '–'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
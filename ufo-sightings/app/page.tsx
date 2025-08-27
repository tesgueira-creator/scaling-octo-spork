"use client";
import Link from 'next/link';
import { useDataset } from '@/components/DataProvider';
import MapView from '@/components/MapView';
import KPIStatCard from '@/components/KPIStatCard';

/**
 * Landing page: introduces the project and surfaces a few quick insights.
 */
export default function HomePage() {
  const { dataset, loading } = useDataset();
  // Compute simple metrics. In a real implementation this might be memoised.
  const total = dataset.length;
  const withImage = dataset.filter((d) => d.hasImage).length;
  const shapeCounts = dataset.reduce<Record<string, number>>((acc, cur) => {
    if (cur.shape) acc[cur.shape] = (acc[cur.shape] || 0) + 1;
    return acc;
  }, {});
  const mostCommonShape = Object.entries(shapeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'Unknown';
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold mb-4">Explore Unidentified Aerial Phenomena</h1>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Dive into thousands of UFO sighting reports from around the world. Analyse patterns, discover anomalies,
          and contribute your own insights.
        </p>
        <Link
          href="/sightings"
          className="inline-block px-6 py-3 bg-primary text-black rounded-md font-medium hover:bg-primary/80 transition"
        >
          Explore Sightings
        </Link>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <KPIStatCard title="Total sightings" value={loading ? '…' : total} />
        <KPIStatCard title="With images" value={loading ? '…' : `${withImage} (${total ? Math.round((withImage / total) * 100) : 0}% )`} />
        <KPIStatCard title="Most common shape" value={loading ? '…' : mostCommonShape} />
      </section>
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Recent activity</h2>
        {/* Placeholder mini map showcasing recent sightings */}
        <MapView />
      </section>
    </div>
  );
}
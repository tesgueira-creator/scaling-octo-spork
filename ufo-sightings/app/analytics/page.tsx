"use client";
import { useDataset } from '@/components/DataProvider';
import KPIStatCard from '@/components/KPIStatCard';
import ChartWrapper from '@/components/ChartWrapper';

/**
 * Analytics overview page. Displays aggregated KPIs and a summary chart.
 */
export default function AnalyticsOverview() {
  const { dataset, loading } = useDataset();
  // Derived metrics
  const total = dataset.length;
  const avgDuration = total ? Math.round(dataset.reduce((sum, d) => sum + (d.duration ?? 0), 0) / total) : 0;
  const shapes = Array.from(new Set(dataset.map((d) => d.shape).filter(Boolean)));
  const withImage = dataset.filter((d) => d.hasImage).length;
  const medianConfidence = (() => {
    const values = dataset.map((d) => d.confidence ?? 0).sort((a, b) => a - b);
    const mid = Math.floor(values.length / 2);
    return values.length ? values[mid] : 0;
  })();
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPIStatCard title="Total" value={loading ? '…' : total} />
        <KPIStatCard title="Avg. duration (s)" value={loading ? '…' : avgDuration} />
        <KPIStatCard title="Distinct shapes" value={loading ? '…' : shapes.length} />
        <KPIStatCard title="With images" value={loading ? '…' : `${withImage}`}/>
        <KPIStatCard title="Median confidence" value={loading ? '…' : medianConfidence} />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Placeholder charts. Replace with actual Chart.js components */}
        <ChartWrapper title="Sightings per month" />
        <ChartWrapper title="Shapes distribution" />
      </section>
    </div>
  );
}
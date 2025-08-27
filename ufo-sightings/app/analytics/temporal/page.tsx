"use client";
import ChartWrapper from '@/components/ChartWrapper';

/**
 * Temporal analytics page. Will eventually contain time series charts.
 */
export default function TemporalAnalytics() {
  return (
    <div className="space-y-4">
      <ChartWrapper title="Sightings over time" />
      <ChartWrapper title="Shape trends" />
    </div>
  );
}
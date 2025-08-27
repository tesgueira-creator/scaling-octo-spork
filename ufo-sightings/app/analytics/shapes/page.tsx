"use client";
import ChartWrapper from '@/components/ChartWrapper';

/**
 * Shape analytics page. Will display donut charts and rankings.
 */
export default function ShapeAnalytics() {
  return (
    <div className="space-y-4">
      <ChartWrapper title="Shape distribution" />
      <ChartWrapper title="Top shapes" />
    </div>
  );
}
"use client";
import ChartWrapper from '@/components/ChartWrapper';

/**
 * Duration analytics page. Contains histograms and other analysis of durations.
 */
export default function DurationAnalytics() {
  return (
    <div className="space-y-4">
      <ChartWrapper title="Duration distribution" />
      <ChartWrapper title="Log-binned durations" />
    </div>
  );
}
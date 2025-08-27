"use client";
import ChartWrapper from '@/components/ChartWrapper';

/**
 * Confidence analytics page. Displays a histogram and box plot of confidence scores.
 */
export default function ConfidenceAnalytics() {
  return (
    <div className="space-y-4">
      <ChartWrapper title="Confidence distribution" />
      <ChartWrapper title="Confidence box plot" />
    </div>
  );
}
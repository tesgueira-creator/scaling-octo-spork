import Link from 'next/link';
import { Suspense } from 'react';

/**
 * Layout for the `/analytics` route. Provides tabs for different
 * analytical views and renders nested content.
 */
export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <nav className="flex flex-wrap gap-4 border-b border-white/10 pb-2">
        <Link href="/analytics" className="hover:text-primary">Overview</Link>
        <Link href="/analytics/temporal" className="hover:text-primary">Temporal</Link>
        <Link href="/analytics/shapes" className="hover:text-primary">Shapes</Link>
        <Link href="/analytics/geographic" className="hover:text-primary">Geographic</Link>
        <Link href="/analytics/confidence" className="hover:text-primary">Confidence</Link>
        <Link href="/analytics/duration" className="hover:text-primary">Duration</Link>
        <Link href="/analytics/custom" className="hover:text-primary">Custom Report</Link>
      </nav>
      <Suspense fallback={<p>Loading…</p>}>{children}</Suspense>
    </div>
  );
}
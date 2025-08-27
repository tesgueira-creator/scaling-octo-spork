import SidePanel from '@/components/SidePanel';
import Link from 'next/link';
import { Suspense } from 'react';

/**
 * Layout for the `/sightings` section. It splits the page into a filter
 * panel on the left and the main view on the right. Nested pages render
 * within the `children` slot.
 */
export default function SightingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <SidePanel />
      <div className="flex-1 space-y-4">
        {/* Tabs for switching between card/table/map views */}
        <nav className="flex space-x-4 border-b border-white/10 pb-2">
          <Link href="/sightings/card" className="hover:text-primary">Card</Link>
          <Link href="/sightings/table" className="hover:text-primary">Table</Link>
          <Link href="/sightings/map" className="hover:text-primary">Map</Link>
        </nav>
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </div>
    </div>
  );
}
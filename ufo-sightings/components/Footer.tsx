"use client";
import Link from 'next/link';

/**
 * Simple footer with legal links and contact information.
 */
export default function Footer() {
  return (
    <footer className="mt-auto w-full py-6 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-gray-400">© {new Date().getFullYear()} UFO Sightings. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/legal" className="hover:text-primary">Legal</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="mailto:contact@example.com" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
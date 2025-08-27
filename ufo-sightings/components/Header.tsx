"use client";
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

/**
 * Global navigation bar. It renders the site logo and primary navigation.
 * A theme toggle stub is included for future extension.
 */
export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <header className="w-full py-4 border-b border-white/10 backdrop-blur sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold text-primary">UFO Sightings</Link>
        <nav className="space-x-4 hidden sm:block">
          <Link href="/sightings" className="hover:text-primary">Sightings</Link>
          <Link href="/analytics" className="hover:text-primary">Analytics</Link>
          <Link href="/parks" className="hover:text-primary">Parks</Link>
          <Link href="/timeline" className="hover:text-primary">Timeline</Link>
          <Link href="/methodology" className="hover:text-primary">Methodology</Link>
          <Link href="/notes" className="hover:text-primary">Notes</Link>
          <Link href="/legal" className="hover:text-primary">Legal</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={clsx(
            'rounded p-2 transition-colors',
            darkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
          )}
          title="Toggle theme"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
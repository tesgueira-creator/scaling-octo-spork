"use client";
import { ReactNode } from 'react';

interface SidePanelProps {
  children?: ReactNode;
}

/**
 * Generic side panel container used to display filters or contextual controls.
 */
export default function SidePanel({ children }: SidePanelProps) {
  return (
    <aside className="w-full sm:w-64 lg:w-80 bg-background-light/50 glass p-4 overflow-y-auto">
      {children || <p className="text-gray-400">Filter controls will appear here.</p>}
    </aside>
  );
}
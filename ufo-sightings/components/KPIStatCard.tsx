"use client";
import { ReactNode } from 'react';

interface KPIStatCardProps {
  title: string;
  value: ReactNode;
  description?: string;
}

/**
 * A small card used in the analytics overview to display a key performance indicator.
 */
export default function KPIStatCard({ title, value, description }: KPIStatCardProps) {
  return (
    <div className="glass p-4 rounded-lg shadow flex flex-col items-start">
      <span className="text-sm uppercase tracking-wide text-primary">{title}</span>
      <span className="text-2xl font-semibold mt-1">{value}</span>
      {description && <span className="text-xs text-gray-400 mt-2">{description}</span>}
    </div>
  );
}
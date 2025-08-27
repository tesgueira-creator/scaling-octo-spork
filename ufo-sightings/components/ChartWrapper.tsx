"use client";
import { ReactNode } from 'react';

interface ChartWrapperProps {
  title: string;
  children?: ReactNode;
}

/**
 * Wrapper component to display a chart with a title and handle loading/error states.
 */
export default function ChartWrapper({ title, children }: ChartWrapperProps) {
  return (
    <div className="glass p-4 rounded-lg shadow flex flex-col space-y-2">
      <h3 className="text-lg font-medium text-primary">{title}</h3>
      <div className="flex-1 min-h-[200px] flex items-center justify-center">
        {children || <p className="text-gray-400">Chart goes here.</p>}
      </div>
    </div>
  );
}
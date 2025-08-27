"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Sighting {
  id: string;
  date: string;
  country: string;
  state: string | null;
  city: string | null;
  shape: string | null;
  duration: number | null;
  description: string;
  confidence: number | null;
  hasImage: boolean;
}

interface DatasetContextValue {
  dataset: Sighting[];
  loading: boolean;
  error: string | null;
}

const DatasetContext = createContext<DatasetContextValue | undefined>(undefined);

/**
 * DataProvider fetches the normalised sightings dataset once at runtime
 * and exposes it via React context. In a full implementation this would
 * also encapsulate filter state and derived selectors through Zustand.
 */
export default function DataProvider({ children }: { children: ReactNode }) {
  const [dataset, setDataset] = useState<Sighting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app this would fetch `/data/sightings.json` or a remote API.
    // Here we simulate an async fetch by importing a local JSON file if present.
    async function loadData() {
      try {
        const res = await fetch('/data/sightings.json');
        if (!res.ok) {
          throw new Error(`Failed to fetch dataset: ${res.status}`);
        }
        const json = await res.json();
        setDataset(json);
      } catch (err: any) {
        setError(err.message ?? 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <DatasetContext.Provider value={{ dataset, loading, error }}>
      {children}
    </DatasetContext.Provider>
  );
}

/**
 * Hook to access the dataset context.
 */
export function useDataset() {
  const ctx = useContext(DatasetContext);
  if (!ctx) throw new Error('useDataset must be used within a DataProvider');
  return ctx;
}
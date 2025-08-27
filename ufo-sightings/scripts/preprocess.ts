#!/usr/bin/env ts-node
/**
 * Preprocess the raw sightings CSV into a normalised JSON dataset. This
 * script is intended to run before `next build` via the `prebuild` npm
 * script. It outputs a JSON file into `.next/cache/data/sightings.json`.
 */
import fs from 'fs';
import path from 'path';

interface Sighting {
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

function parseCSV(csv: string): Sighting[] {
  const [headerLine, ...lines] = csv.trim().split(/\r?\n/);
  const headers = headerLine.split(',');
  return lines.map((line) => {
    const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((c) => c.replace(/^"|"$/g, ''));
    const record: any = {};
    headers.forEach((h, idx) => {
      record[h] = cols[idx] ?? '';
    });
    return {
      id: record.id,
      date: record.date,
      country: record.country,
      state: record.state || null,
      city: record.city || null,
      shape: record.shape || null,
      duration: record.duration ? parseFloat(record.duration) : null,
      description: record.description,
      confidence: record.confidence ? parseFloat(record.confidence) : null,
      hasImage: record.hasImage === 'true',
    } as Sighting;
  });
}

function main() {
  const csvPath = path.join(__dirname, '../data/sightings.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf8');
  const dataset = parseCSV(csvContent);
  const outDir = path.join(process.cwd(), '.next/cache/data');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'sightings.json');
  fs.writeFileSync(outPath, JSON.stringify(dataset, null, 2));
  console.log(`Preprocessed ${dataset.length} records -> ${outPath}`);
}

main();
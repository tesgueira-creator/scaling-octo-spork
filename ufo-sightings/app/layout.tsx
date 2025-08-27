import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DataProvider from '@/components/DataProvider';

// Load a system font for demonstration; adjust weights as needed.
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UFO Sightings Analytics',
  description: 'Explore and analyse UFO sightings around the world.',
};

/**
 * Root layout wraps every page. It provides the data context and renders
 * the global header and footer around the dynamic page content (children).
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={inter.className}>
        {/* Provide dataset context to all pages */}
        <DataProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 px-4 lg:px-8 py-6">
              {children}
            </main>
            <Footer />
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
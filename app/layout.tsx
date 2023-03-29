import '../styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aman Thakur',
    template: '%s | Aman Thakur',
  },
  description: 'Developer, writer, and entrepreneur.',
  openGraph: {
    title: 'Aman Thakur',
    description: 'Developer, writer, and entrepreneur.',
    url: 'https://amanthakur.me',
    siteName: 'Aman Thakur',
    // images: [
    //   {
    //     url: 'https://leerob.io/og.jpg',
    //     width: 1920,
    //     height: 1080,
    //   },
    // ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Aman Thakur',
    card: 'summary_large_image',
  },
  icons: {
    // shortcut: '/favicon.ico',
  },
  verification: {
    // google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    // yandex: '14d2e73487fa6c71',
  },
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <main>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

export default Layout;

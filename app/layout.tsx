import '../styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
        {/* <header>
        {props.home ? (
          <>
            <Image
              priority
              src="/images/aman.png"
              className={'rounded-full inline-block mb-6'}
              height={144}
              width={144}
              alt={name}
            />
          </>
        ) : (
          <div className={'border-b-0 flex align-baseline gap-3'}>
            <Link href="/">Home</Link>
            <p>/</p>
            {props.back && (
              <>
                <Link href={props.back.link}>{props.back.name}</Link>
                <p>/</p>
              </>
            )}
            <p>{props.pageTitle}</p>
          </div>
        )}
      </header> */}
        <main>
          {children}
          {/* <AnalyticsWrapper /> */}
        </main>
        {/* {!props.home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
      </body>
    </html>
  );
}

export default Layout;

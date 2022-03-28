import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import { ReactNode } from 'react';

const name = 'Aman Thakur';
export const siteTitle = 'Aman Thakur Portfolio';

type LayoutPropsType =
  | { pageTitle: string; children: ReactNode; home: false }
  | { home: true; children: ReactNode };

export default function Layout(props: LayoutPropsType) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          {props.home ? (
            <>
              <Image
                priority
                src="/images/aman.png"
                className={styles.headerImage}
                height={144}
                width={144}
                alt={name}
              />
            </>
          ) : (
            <div className={styles.headerBreadcrumbs}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <p>/</p>
              <p>{props.pageTitle}</p>
            </div>
          )}
        </header>
        <main>{props.children}</main>
        {!props.home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

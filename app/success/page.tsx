import { Container } from 'components/container';
import Navigation from 'components/nav';
import Link from 'next/link';

export default function Success() {
  return (
    <section className="bg-slate-100 m-2 pt-4 px-4 pb-24">
      <Container>
        <Navigation className="my-4" />
        <div className="text-center">
          <h1 className="mt-12 text-2xl">🎉 Message sent successfully!</h1>
          <Link href="/" className="btn primary mt-4">
            Go back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}

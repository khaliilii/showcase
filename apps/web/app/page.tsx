import Link from 'next/link';

import { log } from '@showcase/logger';
import { CounterButton, NewTabLink } from '@showcase/ui';

export const metadata = {
  title: 'Showcase | Present the best of yourself!',
};

export default function Main() {
  log('Hey! This is Home.');
  return (
    <div className="container">
      <h1 className="title">
        Showcase <br />
        <span>The best version of yourself!</span>
      </h1>
      <CounterButton />
      <p className="description m-10">
        Built With{' '}
        <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{' '}
        <NewTabLink href="https://nextjs.org/">Next.js</NewTabLink>
      </p>
      <Link href="/about">About Us</Link>
    </div>
  );
}

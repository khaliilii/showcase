import Link from 'next/link';

export default function AboutContent() {
  return (
    <div className="container">
      <h1 className="title">About Us</h1>
      <p className="description m-10">
        Showcase is a platform for political individuals or organizations to
        connect with their constituents.
      </p>
      <Link href="/">Home</Link>
    </div>
  );
}

// src\app\not-found.tsx
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="grid min-h-dvh place-items-center bg-zinc-950 px-6 text-zinc-100">
      <article className="max-w-xl space-y-5 text-center">
        <h1 className="text-5xl font-semibold">Not found :3</h1>

        <nav className="flex flex-col justify-center gap-4">
          <Link
            className="p-5 text-4xl font-bold text-fuchsia-300 shadow shadow-fuchsia-400"
            href="/"
          >
            Home :D
          </Link>

          <Link
            className="p-5 text-4xl font-bold text-fuchsia-300 shadow shadow-fuchsia-400"
            href="/llms.md"
          >
            For agent Smith :)
          </Link>
        </nav>
      </article>
    </main>
  );
};

export default NotFound;

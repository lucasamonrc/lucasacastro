import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <a className="block mb-2 text-5xl font-display font-bold text-neutral-700 uppercase leading-relaxed">
        Lucas Castro
      </a>
    </Link>
  );
}

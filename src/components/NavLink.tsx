import Link from 'next/link';

interface NavLinkProps {
  href: string;
  name: string;
}

export function NavLink({ href, name }: NavLinkProps) {
  return (
    <Link href={href}>
      <a className="font-sans uppercase after:content-[''] after:border-b-4 after:border-rose-800 after:block after:scale-x-0 after:transition-all after:transform after:origin-left after:hover:scale-x-100">
        {name}
      </a>
    </Link>
  );
}

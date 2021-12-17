import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  name: string;
}

export function NavLink({ href, name }: NavLinkProps) {
  const { asPath } = useRouter()
  const isActive = asPath === href;
  
  return (
    <Link href={href}>
      <a className={`nav-link ${isActive ? 'after:scale-x-100' : `nav-link-inactive`}`}>
        {name}
      </a>
    </Link>
  );
}
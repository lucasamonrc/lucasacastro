import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  name: string;
}

export const NavLink = ({ href, name }: NavLinkProps) => {
  const { asPath } = useRouter()
  const isActive = asPath === href;
  
  return (
    <NextLink href={href}>
      <a className={`
          uppercase
          after:content-['']
          after:border-b-4
          after:border-sky-600
          after:block
          ${isActive 
            ? 'after:scale-x-1' 
            : `after:scale-x-0 after:transition-all after:transform after:origin-left after:hover:scale-x-100`
          }`
        }
      >
        {name}
      </a>
    </NextLink>
  );
}
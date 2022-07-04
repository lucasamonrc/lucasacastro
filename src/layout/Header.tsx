import Image from 'next/image';
import { Logo } from '../components/Logo';
import { NavLink } from '../components/NavLink';

import links from '../assets/links';
import profile from '../../public/profile.jpg';

export function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-16">
        <Image
          src={profile}
          alt=""
          className="rounded-full"
          width={100}
          height={100}
        />
        <header className="flex flex-col justify-center items-center">
          <Logo />
          <nav className="flex gap-4 text-md">
            {links.map((link) => (
              <NavLink key={link.name} href={link.src} name={link.name} />
            ))}
          </nav>
        </header>
      </div>
      <hr className="mb-16" />
    </>
  );
}

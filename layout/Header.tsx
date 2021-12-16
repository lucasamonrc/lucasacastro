import { Logo } from "../components/Logo";
import { NavLink } from "../components/NavLink";

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center py-16">
      <Logo />
      <nav className="flex gap-4 text-md">
        <NavLink href="/blog" name="blog" />
        <NavLink href="/work" name="work" />
        <NavLink href="/contact" name="contact" />
      </nav>
    </header>
  );
}
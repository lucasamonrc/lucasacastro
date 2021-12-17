import NextLink from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="mt-32">
      <hr />
      <p className="text-center text-xl text-gray-800 mt-8">@lucasamonrc</p>
      <nav className="flex justify-center gap-4 mt-4 mb-16">
        <NextLink href="#">
          <a target="_blank" className="nav-icon">
            <FiLinkedin />
          </a>
        </NextLink>
        <NextLink href="#">
          <a target="_blank" className="nav-icon">
            <FiGithub />
          </a>
        </NextLink>
        <NextLink href="#">
          <a target="_blank" className="nav-icon">
            <FiTwitter />
          </a>
        </NextLink>
      </nav>
      <p>Built with <a>Next.js</a>. Data from <a>Hashnode</a>. Hosted on <a>Vercel</a>.</p>
    </footer>
  );
}
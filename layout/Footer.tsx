import NextLink from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="mt-32">
      <hr />
      <p className="text-center text-xl text-gray-800 mt-8">@lucasamonrc</p>
      <nav className="flex justify-center gap-4 mt-4 mb-16">
        <NextLink href="#">
          <a target="_blank" className="block text-4xl text-sky-600 transition-transform hover:-translate-y-2">
            <FiLinkedin />
          </a>
        </NextLink>
        <NextLink href="#">
          <a target="_blank" className="block text-4xl text-sky-600 transition-transform hover:-translate-y-2">
            <FiGithub />
          </a>
        </NextLink>
        <NextLink href="#">
          <a target="_blank" className="block text-4xl text-sky-600 transition-transform hover:-translate-y-2">
            <FiTwitter />
          </a>
        </NextLink>
      </nav>
      <p>Built with <a>Next.js</a>. Data from <a>Hashnode</a>. Hosted on <a>Vercel</a>.</p>
    </footer>
  );
}
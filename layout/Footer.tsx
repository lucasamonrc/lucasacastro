import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="mt-32">
      <hr />
      <p className="text-center text-xl text-gray-800 mt-8">@lucasamonrc</p>
      <nav className="flex justify-center gap-4 mt-4 mb-16">
        <Link href="#">
          <a target="_blank" className="nav-icon">
            <FiLinkedin />
          </a>
        </Link>
        <Link href="#">
          <a target="_blank" className="nav-icon">
            <FiGithub />
          </a>
        </Link>
        <Link href="#">
          <a target="_blank" className="nav-icon">
            <FiTwitter />
          </a>
        </Link>
      </nav>
      <p>Built with <a>Next.js</a>. Data from <a>Hashnode</a>. Hosted on <a>Vercel</a>.</p>
    </footer>
  );
}
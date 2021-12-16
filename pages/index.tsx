import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Lucas A Castro</title>
      </Head>
      <main>
        <section className="flex items-center justify-center gap-8 mb-32">
          <div>
            <h1 className="text-3xl font-light mb-4">Hello there. I'm Lucas!</h1>
            <p className="text-gray-600 text-xl leading-loose mb-8">
            I’m a father, a husband, and a software engineer. My mission is to write software that improves people's lives. I have experience building and designing for the web, as well as writing automated tests.
            </p>
            <ul className="flex justify-start gap-4">
              <li>
                <NextLink href="#">
                  <a target="_blank" className="block text-4xl text-sky-600 transition-transform hover:-translate-y-2">
                    <FiLinkedin />
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="#">
                  <a target="_blank" className="block text-4xl text-sky-600 transition-transform hover:-translate-y-2">
                    <FiGithub />
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="#">
                  <a target="_blank" className="block text-4xl text-sky-600 transition-transform hover:-translate-y-2">
                    <FiTwitter />
                  </a>
                </NextLink>
              </li>
            </ul>
          </div>
          <img src="/assets/profile.jpg" alt="profile" className="hidden md:block rounded-full w-1/4 "/>
        </section>

        <section className="mb-28">
          <h1 className="text-3xl font-light mb-4">
            I build{" "}
            <NextLink href="/work">
              <a className="text-sky-600 underline underline-offset-8 font-bold px-1 pb-1 transition hover:bg-sky-600 hover:text-white"
              >
                projects
              </a>
            </NextLink>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            I have put my skills to practice by building some interesting things for professional, educational, and personal purposes.
          </p>

          {/* recent projects */}
        </section>

        <section className="mb-28">
        <h1 className="text-3xl font-light mb-4">
            I write{" "}
            <NextLink href="/blog">
              <a className="text-sky-600 underline underline-offset-8 font-bold px-1 pb-1 transition hover:bg-sky-600 hover:text-white"
              >
                articles
              </a>
            </NextLink>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Occasionally I feel compelled to write about things that I am learning or that interests me. I have plans to write new articles more frequently to showcase some of the things I have been working on.
          </p>

          {/* recent blog posts */}
        </section>
      </main>
    </>
  );
}

export default Home;

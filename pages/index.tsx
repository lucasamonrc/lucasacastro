import Head from "next/head";
import Link from "next/link";
import NextImage from "next/image";
import type { GetStaticProps } from "next";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import { Article } from "../components/Article";
import { Project } from "../components/Project";
import { getProjects } from "../services/notion";
import profile from "../public/assets/profile.jpg";
import { GET_USER_ARTICLES, gql } from "../services/hashnode";

type Project = {
  thumbnail: string | null,
  title: string,
  brief: string,
  technologies: string[],
  startDate: string,
  endDate: string,
  url: string | null,
  github: string | null,
};

type Post = {
  title: string,
  brief: string,
  slug: string,
  dateAdded: Date,
  coverImage: string,
};

interface HomeProps {
  projects: Project[];
  posts: Post[];
}

export default function Home({ projects, posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Lucas A Castro</title>
      </Head>
      <main>
        <section className="flex items-center justify-center gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-light mb-4">Hello there. I&apos;m Lucas!</h1>
            <p className="text-gray-600 text-xl leading-loose mb-8">
            I&apos;m a father, a husband, and a software engineer. My mission is to write software that improves people&apos;s lives. I have experience building and designing for the web, as well as writing automated tests.
            </p>
            <ul className="flex justify-start gap-4">
              <li>
                <Link href="#">
                  <a target="_blank" className="nav-icon">
                    <FiLinkedin />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a target="_blank" className="nav-icon">
                    <FiGithub />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a target="_blank" className="nav-icon">
                    <FiTwitter />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <NextImage src={profile} alt="profile" className="rounded-full w-1/4 "/>
          </div>
        </section>

        <hr className="mb-32" />

        <section className="mb-28">
          <h1 className="text-3xl font-light mb-4">
            I build{" "}
            <Link href="/work">
              <a className="heading-link"
              >
                projects
              </a>
            </Link>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            I have put my skills to practice by building some interesting things for professional, educational, and personal purposes.
          </p>

          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </section>

        <section className="mb-28">
        <h1 className="text-3xl font-light mb-4">
            I write{" "}
            <Link href="/blog">
              <a className="heading-link"
              >
                articles
              </a>
            </Link>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Occasionally I feel compelled to write about things that I am learning or that interests me. I have plans to write new articles more frequently to showcase some of the things I have been working on.
          </p>

          {posts.map((post) => (
            <Article key={post.slug} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects({ pageSize: 3, sorts: [{ property: 'date', direction: 'descending' }] });

  const { data } = await gql(GET_USER_ARTICLES, { page: 0 });
  const posts = data.user.publication.posts;

  return {
    props: {
      projects,
      posts: posts.slice(0, posts.length - 1),
    },
    revalidate: 86400 // 24 hours
  }
}
import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import { Client } from "@notionhq/client";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import type { GetStaticProps } from "next";

import { Article } from "../components/Article";
import profile from "../public/assets/profile.jpg";
import { GET_USER_ARTICLES, gql } from "../services/hashnode";
import { Project } from "../components/Project";

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

const Home = ({ projects, posts }: HomeProps) => {
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
          <div className="hidden md:block">
            <NextImage src={profile} alt="profile" className="rounded-full w-1/4 "/>
          </div>
        </section>

        <hr className="mb-32" />

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

          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
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

          {posts.map((post) => (
            <Article key={post.slug} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const database_id = process.env.NOTION_DB_ID as string;

  const response = await notion.databases.query({ 
    database_id,
    page_size: 3, 
    sorts: [ { property: 'date', direction: 'descending' }] 
  }) as any;

  const projects = response.results.map(({ properties }: any) => {
    return {
      thumbnail: properties.thumbnail.url,
      url: properties.url.url,
      github: properties.github.url,
      title: properties.title.title[0].plain_text,
      brief: properties.brief.rich_text[0].plain_text,
      technologies: properties.technologies.multi_select.map(({ name }: any) => name),
      startDate: properties.startDate.rich_text[0].plain_text,
      endDate: properties.endDate.rich_text[0].plain_text,
    }
  });

  const { data: { user: { publication: { posts } } } } = await gql(GET_USER_ARTICLES, { page: 0 });

  return {
    props: {
      projects,
      posts: posts.slice(0, posts.length - 1),
    },
    revalidate: 86400 // 24 hours
  }
}
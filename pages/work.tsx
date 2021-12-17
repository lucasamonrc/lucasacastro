import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";

import { Project } from "../components/Project";
import { getProjects } from "../services/notion";

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

interface WorkProps {
  projects: Project[];
}

export default function Work({ projects }: WorkProps) {
  return (
    <>
      <Head>
        <title>Work | Lucas A Castro</title>
      </Head>
      <main>
        <h1 className="page-title">Work</h1>
        <hr className="mb-16"/>

        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}

        <Link href="https://www.github.com/lucasamonrc">
          <a target="_blank" className="btn-link mt-16">See all projects</a>
        </Link>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects({ pageSize: 10, sorts: [{ property: 'date', direction: 'descending' }] });

  return {
    props: {
      projects,
    },
    revalidate: 86400 // 24 hours
  }
}
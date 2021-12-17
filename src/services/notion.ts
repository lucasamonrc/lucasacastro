import { Client } from "@notionhq/client";

export const notion = new Client({ auth: process.env.NOTION_KEY });
const database_id = process.env.NOTION_DB_ID as string;

interface GetProjectsArguments {
  pageSize?: number;
  sorts?: ({
    property: string;
    direction: "ascending" | "descending";
  } | {
      timestamp: "created_time" | "last_edited_time";
      direction: "ascending" | "descending";
  })[]
}

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

export async function getProjects({ pageSize, sorts }: GetProjectsArguments): Promise<Project[]> {
  const response = await notion.databases.query({ 
    database_id,
    page_size: pageSize, 
    sorts,
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

  return projects;
}
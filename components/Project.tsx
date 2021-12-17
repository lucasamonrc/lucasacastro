import NextLink from "next/link";
import NextImage from "next/image";

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

interface ProjectProps {
  project: Project;
}

export const Project = ({ project }: ProjectProps) => {
  return (
    <article className="flex gap-4 justify-between items-start mb-8">
      {!!project.thumbnail && <div className="hidden md:block relative w-[208px] h-[132px] shadow-sm">
        <NextImage
          src={project.thumbnail}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          className="block rounded"
        />
      </div>}
      <div className="w-full md:w-3/4">
        <NextLink href={!!project.github ? project.github : !!project.url ? project.url : '#'}>
          <a target="_blank" className="article-title">{project.title}</a>
        </NextLink>
        <span className="block text-gray-500 mb-2">Built with: {project.technologies.map((tech) => tech + " ")}</span>
        <p className="line-clamp-3">{project.brief}</p>
        <span className="block text-gray-500 mt-2">{project.startDate} - {project.endDate}</span>
        
      </div>
    </article>
  );
}
import NextLink from "next/link";
import NextImage from "next/image";

type Post = {
  title: string,
  brief: string,
  slug: string,
  dateAdded: Date,
  coverImage: string,
};

interface ArticleProps {
  post: Post;
}

export const Article = ({ post }: ArticleProps) => {
  return (
    <article className="flex gap-4 justify-between items-start mb-8">
      <div className="hidden md:block relative w-[208px] h-[132px] shadow-sm">
        <NextImage
          src={post.coverImage}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          className="block rounded"
        />
      </div>
      <div className="w-full md:w-3/4">
        <NextLink href={process.env.NEXT_PUBLIC_BLOG_URL + `/${post.slug}`}>
          <a target="_blank" className="block font-bold text-xl transition-colors text-gray-800 hover:text-sky-600 mb-1 line-clamp-1">{post.title}</a>
        </NextLink>
        <span className="block text-gray-500 mb-2">
          {new Date(post.dateAdded).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </span>
        <p className="line-clamp-3">{post.brief}</p>
      </div>
    </article>
  );
}
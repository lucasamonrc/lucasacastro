import Link from 'next/link';
import Image from 'next/image';

type Post = {
  title: string;
  brief: string;
  slug: string;
  dateAdded: Date;
};

interface ArticleProps {
  post: Post;
}

export function Article({ post }: ArticleProps) {
  return (
    <article className="w-full mb-8">
      <span className="block text-neutral-500 mb-1 uppercase font-sans text-sm">
        {new Date(post.dateAdded).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })}
      </span>
      <Link href={process.env.NEXT_PUBLIC_BLOG_URL + `/${post.slug}`}>
        <a className="block font-bold text-2xl font-sans transition-colors text-neutral-700 hover:text-rose-800 mb-4 line-clamp-1">
          {post.title}
        </a>
      </Link>
      <p className="line-clamp-3 leading-relaxed text-lg">{post.brief}</p>
      <Link href="/archive">
        <a className="block mt-4 cursor-pointer font-semibold hover:text-rose-700 transition-colors">
          Read more
        </a>
      </Link>
    </article>
  );
}

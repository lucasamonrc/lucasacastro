import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticProps } from 'next';

import { Article } from '../components/Article';
import { GET_USER_ARTICLES, gql } from '../services/hashnode';

type Post = {
  title: string;
  brief: string;
  slug: string;
  dateAdded: Date;
  coverImage: string;
};

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Lucas Castro</title>
      </Head>
      <main>
        <h1 className="text-3xl mb-4 font-sans font-bold uppercase">
          What&apos;s new?
        </h1>
        <p className="text-neutral-600 text-xl mb-8 leading-relaxed">
          Occasionally I feel compelled to write about things that I am learning
          or that interests me.
        </p>

        {posts.map((post) => (
          <Article key={post.slug} post={post} />
        ))}
        <Link href="/archive">
          <a className="block text-center mt-16 mx-auto text-gray-500 cursor-pointer hover:text-rose-800 transition-colors">
            Archive
          </a>
        </Link>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await gql(GET_USER_ARTICLES, { page: 0 });
  const posts = data.user.publication.posts;

  return {
    props: {
      posts: posts.slice(0, posts.length - 1),
    },
    revalidate: 86400, // 24 hours
  };
};

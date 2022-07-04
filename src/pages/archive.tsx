import Head from 'next/head';
import type { GetStaticProps } from 'next';

import { GET_USER_ARTICLES, gql } from '../services/hashnode';
import { Article } from '../components/Article';

type Post = {
  title: string;
  brief: string;
  slug: string;
  dateAdded: Date;
  coverImage: string;
};

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog | Lucas Castro</title>
      </Head>
      <main>
        <h1 className="text-3xl font-display uppercase mb-4 text-neutral-600">
          Archive
        </h1>
        <hr className="mb-8" />

        {posts.map((post) => (
          <Article key={post.slug} post={post} />
        ))}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await gql(GET_USER_ARTICLES, { page: 0 });
  const posts = data.user.publication.posts;

  return {
    props: {
      posts,
    },
    revalidate: 86400, // 24 hours
  };
};

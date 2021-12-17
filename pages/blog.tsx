import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";

import { GET_USER_ARTICLES, gql } from "../services/hashnode";
import { Article } from "../components/Article";

type Post = {
  title: string,
  brief: string,
  slug: string,
  dateAdded: Date,
  coverImage: string,
};

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog | Lucas A Castro</title>
      </Head>
      <main>
        <h1 className="page-title">Blog</h1>
        <hr className="mb-16"/>

        {posts.map((post) => (
          <Article key={post.slug} post={post} />
        ))}

        <Link href={process.env.NEXT_PUBLIC_BLOG_URL ?? '#'}>
          <a target="_blank" className="btn-link">See all posts</a>
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
      posts,
    },
    revalidate: 86400 // 24 hours
  }
}

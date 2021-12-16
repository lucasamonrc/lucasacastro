import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Lucas A Castro</title>
      </Head>
      <main>
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Blog</h1>
        <hr />
      </main>
    </>
  );
}

export default Contact;

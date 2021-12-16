import NextLink from "next/link";

export const Logo = () => {
  return (
    <>
      <NextLink href="/">
        <a className="block mb-2 text-4xl font-extrabold text-gray-800">Lucas <span className="text-sky-600">A</span> Castro</a>
      </NextLink>
      <p className="text-3xl font-light text-gray-800 mb-6">Software Engineer</p>
    </>
  );
}
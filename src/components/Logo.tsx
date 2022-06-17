import Link from 'next/link';

export function Logo() {
  return (
    <>
      <Link href='/'>
        <a className='block mb-2 text-4xl font-extrabold text-sky-600'>
          Lucas Castro
        </a>
      </Link>
      <p className='text-3xl font-light text-gray-800 mb-6'>
        Software Engineer
      </p>
    </>
  );
}

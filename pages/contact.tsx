import Head from "next/head";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function Contact() {
  const [contactRequest, setContactRequest] = useState({
    name: "",
    email: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContactRequest({
      ...contactRequest,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    setLoading(true);

    await fetch('/api/requests', {
      method: 'POST',
      body: JSON.stringify(contactRequest),
    });

    setLoading(false);
    setSubmitted(true);
  }


  return (
    <>
      <Head>
        <title>Contact | Lucas A Castro</title>
      </Head>
      <main>
        <h1 className="page-title">Contact</h1>
        <hr />

        {
          !submitted 
          ? (
            <>
              <p className="mt-8 text-xl leading-relaxed">
                Interested in working with me? Would like to leave a suggestion for new content? Or do you have a more general question? Please, just let me know!
              </p>
              <form onSubmit={handleSubmit} className="w-full mt-8">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  className="block w-full bg-gray-200 p-2 text-xl rounded outline-sky-600 mb-4 shadow-inner"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="block w-full bg-gray-200 p-2 text-xl rounded outline-sky-600 mb-4 shadow-inner"
                  required
                />
                <textarea
                  name="body"
                  placeholder="Include any relevant information regarding your request"
                  onChange={handleChange}
                  className="block w-full bg-gray-200 p-2 text-xl rounded outline-sky-600 mb-4 shadow-inner min-h-[128px] resize-y"
                  required
                />
                <button type="submit" className="btn mt-12" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
              </form>
            </>
          )
          : (
            <section className="mt-32 text-center text-xl">
              <p className="font-bold text-green-700 mb-4">Success!</p>
              <p className="mb-4">Your request was submitted successfully. I will reach out back to you soon!</p>
              <p>In the meantime feel free to connect with in any of the channels below.</p>
            </section>
          )
        }
      </main>
    </>
  );
}

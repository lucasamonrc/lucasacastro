import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function (request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).end('Method not allowed');
  }

  const formData = JSON.parse(request.body);

  const msg = {
    to: 'lucasamonrc@gmail.com',
    from: 'lucasamonrc@gmail.com',
    subject: 'New Contact Request',
    text: `
      ${formData.name} < ${formData.email} >

      ${formData.body}
    `,
  }

  await sgMail.send(msg);

  return response.status(200).json({ message: 'Request form submitted '});
}
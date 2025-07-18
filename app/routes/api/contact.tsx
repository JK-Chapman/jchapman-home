import { Resend } from "resend";
import type { ActionFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Contact Form <contact@jonchapman.dev>",
      to: "jonkchpmn@gmail.com",
      subject: `Contact from ${name}`,
      replyTo: email,
      html: `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), { status: 500 });
  }
}
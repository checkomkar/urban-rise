import { Resend } from "resend";
import { NextResponse } from "next/server";

const key = process.env.RESEND_API_KEY;
const resend = new Resend(key);

export async function POST(request: Request) {
	try {
		const { firstName, lastName, email, phone, country, message } =
			await request.json();

		const data = await resend.emails.send({
			from: "Urban Rise <onboarding@resend.dev>",
			to: ["ritesh@urbanrise-re.com"], // Replace with your email
			// to: ["omkarkamale001@gmail.com"], // Replace with your email
			subject: "New Contact Form Submission",
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Property Interest:</strong> ${message}</p>
      `,
		});
		return NextResponse.json({ ...data });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}

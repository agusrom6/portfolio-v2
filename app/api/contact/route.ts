import { NextResponse } from "next/server";
import { contactSchema } from "@/common/lib/contact-schema";
import { transporter } from "@/common/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.BREVO_SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "Nuevo mensaje del portfolio",
      html: `
        <h3>Nuevo mensaje</h3>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
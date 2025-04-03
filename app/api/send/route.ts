import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received request body:", body); // Debug log

    const emailFormData = formSchema.parse(body);
    console.log("Parsed form data:", emailFormData); // Debug log

    const { data, error } = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Welcome",
      react: await EmailTemplate({
        firstname: emailFormData.firstname,
        lastname: emailFormData.lastname,
        email: emailFormData.email,
        message: emailFormData.message,
      }),
    });

    if (error) {
      console.error("Resend API error:", error); // Debug log
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error in API route:", error); // Debug log
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: error.errors,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

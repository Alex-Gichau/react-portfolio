import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // This is where you'd put your GitHub Webhook URL or Repository Dispatch URL
    // For safety, we should use an environment variable
    const WEBHOOK_URL = process.env.GITHUB_WEBHOOK_URL;

    if (!WEBHOOK_URL) {
      console.warn("GITHUB_WEBHOOK_URL is not defined in environment variables.");
      // For now, we'll just log and return success to show it working on the frontend
      console.log("Form Submission:", { name, email, message });
      return NextResponse.json({ message: "Success (Logged)" }, { status: 200 });
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type: 'contact_form_submission',
        client_payload: {
          name,
          email,
          message,
          submitted_at: new Date().toISOString()
        }
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Message sent via webhook!" }, { status: 200 });
    } else {
      throw new Error("Failed to send webhook");
    }

  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json({ message: "Error sending message." }, { status: 500 });
  }
}

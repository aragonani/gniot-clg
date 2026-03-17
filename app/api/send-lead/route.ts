import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
      console.log("<<<<<<<<<<<API KEY>>>>>>>>>>>:", process.env.RESEND_API_KEY);
  const { name, email, phone, city, course } = await req.json();

  const { error } = await resend.emails.send({
    from: "MBA Admissions <onboarding@resend.dev>", // use resend's default until you verify a domain
    to: process.env.CLIENT_EMAIL!,
    subject: `New Lead: ${name} — ${course}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <div style="background:#00648f;padding:24px 28px;">
          <h2 style="color:#fcc423;margin:0;font-size:20px;">New Admission Enquiry</h2>
          <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px;">MBA / PGDM Admissions 2026</p>
        </div>
        <div style="padding:24px 28px;background:#fff;">
          ${[
            ["👤 Name",   name],
            ["✉️ Email",  email],
            ["📞 Phone",  phone],
            ["📍 City",   city],
            ["🎓 Course", course],
          ]
            .map(
              ([label, value]) => `
            <div style="margin-bottom:14px;">
              <p style="margin:0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:.06em;">${label}</p>
              <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#111;">${value}</p>
            </div>`
            )
            .join("")}
        </div>
        <div style="background:#f9fafb;padding:14px 28px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#9ca3af;">Submitted via the admissions form</p>
        </div>
      </div>
    `,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ success: true });
}
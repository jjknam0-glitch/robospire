import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, role, experience, availability, motivation } = body

    const { data, error } = await resend.emails.send({
      from: "RoboSpire Application <noreply@resend.dev>",
      to: ["officialrobospire@gmail.com"],
      subject: `New ${role} Application from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">New RoboSpire Application</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Applicant Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Role:</strong> ${role}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Experience</h3>
            <p>${experience}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Availability</h3>
            <p>${availability}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Motivation</h3>
            <p>${motivation}</p>
          </div>

          <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
            This application was submitted through the RoboSpire website.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
    }

    console.log("[v0] Email sent successfully:", data)
    return NextResponse.json({ success: true, message: "Application submitted successfully!" })
  } catch (error) {
    console.error("[v0] API route error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

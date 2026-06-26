import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Kept short and punchy so it fits well in a standard SMS message
    const messageBody = `
NEW BOOKING
Who: ${data.name} 
Phone: ${data.phone}
Pkg: ${data.service.toUpperCase()} - ${data.size.toUpperCase()}
When: ${data.date} @ ${data.time}
Where: ${data.location}
`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.PHONE_GATEWAY_ADDRESS,
      subject: 'Goldhill Booking', // This will show up in bold in the text message
      text: messageBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email gateway error:', error);
    return NextResponse.json({ error: 'Failed to process booking.' }, { status: 500 });
  }
}
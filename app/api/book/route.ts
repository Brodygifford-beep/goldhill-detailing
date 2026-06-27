import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase (Bypassing Row Level Security for the backend insertion)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 1. Save the booking to Supabase Database
    const { error: dbError } = await supabase
      .from('appointments')
      .insert([
        {
          name: data.name,
          phone: data.phone,
          location: data.location,
          service: data.service,
          size: data.size,
          date: data.date,
          time: data.time,
          status: 'pending'
        }
      ]);

    if (dbError) {
      console.error("Database Error:", dbError);
      return NextResponse.json({ error: 'Failed to save to database.' }, { status: 500 });
    }

    // 2. Send the Text Message Notification
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
      subject: 'Goldhill Booking', 
      text: messageBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to process booking.' }, { status: 500 });
  }
}
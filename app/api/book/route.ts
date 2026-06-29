import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Save the booking to Supabase Database
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

    if (dbError) throw dbError;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to process booking.' }, { status: 500 });
  }
}
import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();

    const supabase = createClient();

    const { error } = await supabase.from("community_emoji").insert({
      ...data,
      community_id: Number(params.id),
    });

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
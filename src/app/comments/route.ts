import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(comments);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { text } = await request.json();

  const newComment = { id: comments.length + 1, text };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

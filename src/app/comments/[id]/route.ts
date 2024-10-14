import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const foundIndex = comments.findIndex(
      (comment) => comment.id === Number(id)
    );

    if (foundIndex === -1)
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });

    return NextResponse.json(comments[foundIndex]);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const { text } = await request.json();

    const foundIndex = comments.findIndex(
      (comment) => comment.id === Number(id)
    );

    if (foundIndex === -1)
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });

    comments[foundIndex].text = text;

    return NextResponse.json(comments);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const foundIndex = comments.findIndex(
      (comment) => comment.id === Number(id)
    );

    if (foundIndex === -1)
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });

    const deletedComment = comments[foundIndex];

    comments.splice(foundIndex, 1);

    return NextResponse.json(deletedComment);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

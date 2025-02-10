import { connectToDatabase } from "@/lib/db";
import Post from "@/model/posts";
import { NextRequest, NextResponse } from "next/server";

// get blog post by slug
export async function GET(
   req: NextRequest,
   context: { params: Promise<{ id: string }> }
) {
   try {
      await connectToDatabase();
      const { params } = context;
      const resolvedParams = await params;
      if (!resolvedParams || !resolvedParams.id) {
         return NextResponse.json(
            { message: "Post not found" },
            { status: 404 }
         )
      }

      const { id } = resolvedParams;

      const post = await Post.findOne({ slag: id }).lean();
      if (!post) {
         return NextResponse.json(
            { message: "Post not found" },
            { status: 404 }
         )
      }

      return NextResponse.json(
         { post },
         { status: 200 }
      )
   } catch (error) {
      return NextResponse.json(
         { message: "Internal server error" },
         { status: 500 }
      )
   }
}
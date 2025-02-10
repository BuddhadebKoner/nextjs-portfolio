import { connectToDatabase } from "@/lib/db";
import Post from "@/model/posts";
import { NextRequest, NextResponse } from "next/server";

// post one post 
export async function POST(req: NextRequest) {
   try {
      const { title, description, image, slag, secritKey } = await req.json();

      if (secritKey !== process.env.SECRET_KEY) {
         return NextResponse.json(
            { message: "Invalid secret key" },
            { status: 401 }
         )
      }

      if (!title || !description || !image || !slag) {
         return NextResponse.json(
            { message: "All fields are required" },
            { status: 400 }
         )
      }

      await connectToDatabase();

      // check the slag is already exist
      const post = await Post.findOne({ slag });
      if (post) {
         return NextResponse.json(
            { message: "Post already exist" },
            { status: 400 }
         )
      }

      await Post.create({ title, description, image, slag });

      return NextResponse.json(
         { message: "Post created successfully" },
         { status: 201 }
      )

   } catch (error) {
      return NextResponse.json(
         { message: "Internal server error" },
         { status: 500 }
      )
   }
}

// get all posts
export async function GET(req: NextRequest) {
   try {
      await connectToDatabase();

      const searchParams = new URL(req.url).searchParams;
      const page = parseInt(searchParams.get("page") || "1", 10);
      const limit = parseInt(searchParams.get("limit") || "5", 10);
      const skip = (page - 1) * limit;

      const posts = await Post.find()
         .sort({ createdAt: -1 })
         .skip(skip)
         .limit(limit)
         .lean();

      const totalPosts = await Post.countDocuments();

      return NextResponse.json(
         { posts: posts, totalPosts, page, totalPages: Math.ceil(totalPosts / limit) },
         { status: 200 }
      );

   } catch (error) {
      return NextResponse.json(
         { message: "Internal server error" },
         { status: 500 }
      );
   }
}

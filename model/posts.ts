import mongoose from "mongoose";

export interface IPost {
   title: string;
   description: string;
   image: string;
   link: string;
   profilelink: string;
   mediaIcon: string;
   postdate: string;
}

const PostSchema = new mongoose.Schema<IPost>({
   title: { type: String, required: true },
   description: { type: String, required: true },
   image: { type: String, required: true },
   link: { type: String, required: true },
   profilelink: { type: String, required: true },
   mediaIcon: { type: String, required: true },
   postdate: { type: String, required: true },
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
export default Post;

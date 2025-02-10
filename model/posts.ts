import mongoose from "mongoose";

export interface IPost {
   title: string;
   description: string;
   image: string;
   slag: string;
   createdAt?: Date;
   updatedAt?: Date;
}

const PostSchema = new mongoose.Schema<IPost>({
   title: { type: String, required: true },
   description: { type: String, required: true },
   image: { type: String, required: true },
   slag: { type: String, required: true }
}, { timestamps: true }); 

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
export default Post;

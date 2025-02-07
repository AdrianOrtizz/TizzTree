import mongoose, { Document } from "mongoose";

interface ILink extends Document {
  title: string;
  url: string;
  user: mongoose.Types.ObjectId;
}

const linkSchema = new mongoose.Schema<ILink>({
  title: { type: String, required: true },
  url: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Link = mongoose.model("Link", linkSchema);

export default Link;

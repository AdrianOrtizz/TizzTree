import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  links: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: "Link" }],
  },
  { timestamps: false }
);

const User = mongoose.model("User", userSchema);

export default User;

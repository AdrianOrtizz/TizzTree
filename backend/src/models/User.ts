import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  links: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
      match: [
        /^[a-zA-Z0-9_]+$/,
        "El username solo puede contener letras, números y guiones bajos.",
      ],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Formato de email inválido."],
    },
    password: { type: String, required: true },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: "Link" }],
  },
  { timestamps: false }
);

const User = mongoose.model("User", userSchema, "users");

export default User;

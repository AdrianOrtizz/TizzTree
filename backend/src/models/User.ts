import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  image: string;
  username: string;
  name: string;
  email: string;
  password: string;
  links: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<IUser>(
  {
    image: {
      type: String,
      required: false,
      default:
        "https://res.cloudinary.com/djd7b0upe/image/upload/v1721331531/link-tree-clon/profile%20pictures/user_default.webp",
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
      match: [
        /^[a-zA-Z0-9._]+$/,
        "El username solo puede contener letras, números, puntos y guiones bajos.",
      ],
    },
    name: {
      type: String,
      required: false,
      match: [
        /^[a-zA-Z0-9_ ]+$/,
        "El nombre solo puede contener letras, números, espacios y guiones bajos.",
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

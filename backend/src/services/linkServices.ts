import Link from "../models/Links";
import User from "../models/User";

import {
  ILinkData,
  ILinkToModify,
  IDeleteData,
} from "../helpers/interfaces/linkInterfaces";

export default {
  addLink: async ({ title, url, image, userID }: ILinkData) => {
    const newLink = await Link.create({ title, url, image, user: userID });

    await User.findByIdAndUpdate(userID, { $push: { links: newLink._id } });

    return newLink;
  },

  modifyLink: async ({ update, linkID }: ILinkToModify) => {
    const updatedLink = await Link.findByIdAndUpdate(linkID, update, {
      new: true,
    });

    if (!updatedLink) {
      throw new Error("El link no existe");
    }

    return updatedLink;
  },

  deleteLink: async ({ userID, linkID }: IDeleteData) => {
    await User.findByIdAndUpdate(userID, { $pull: { links: linkID } });
    const deletedLink = await Link.findByIdAndDelete(linkID);

    if (!deletedLink) {
      throw new Error("El link no existe");
    }

    return { message: "Link eliminado correctamente" };
  },
};

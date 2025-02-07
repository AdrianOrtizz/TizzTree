import mongoose from "mongoose";

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://adrianortizzt1vl:PvD4I4qsmL9qBLJT@linktree.hy49g.mongodb.net/"
  );
};

export default dbCon;

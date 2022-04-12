import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const data = req.body;
  const newPost = await db.collection("list").insertOne(data);
  res.json(newPost);
}

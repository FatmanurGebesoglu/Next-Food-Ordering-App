import Category from "@/models/Category";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const categories = await Category.find(); // find all the data in our database
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
    }
  }
  if (method === "POST") {
    try {
      const newCategory = await Category.create(req.body); // create a new model in the database
      res.status(200).json(newCategory);
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
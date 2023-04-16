import Product from "@/models/Product";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const products = await Product.find(); // find all the data in our database
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }
  if (method === "POST") {
    try {
      const newProduct = await Product.create(req.body); // create a new model in the database
      res.status(200).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;

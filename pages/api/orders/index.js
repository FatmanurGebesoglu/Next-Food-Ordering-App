import Order from "@/models/Order";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const orders = await Order.find(); // find all the data in our database
      res.status(200).json(orders);
    } catch (error) {
      console.log(error);
    }
  }
  if (method === "POST") {
    try {
      const newOrder = await Order.create(req.body); // create a new model in the database
      res.status(200).json(newOrder);
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;

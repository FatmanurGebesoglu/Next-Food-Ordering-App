import Footer from "@/models/Footer";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const footer = await Footer.find(); // find all the data in our database
      res.status(200).json(footer);
    } catch (error) {
      console.log(error);
    }
  }
  if (method === "POST") {
    try {
      const newFooter = await Footer.create(req.body); // create a new model in the database
      res.status(200).json(newFooter);
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;

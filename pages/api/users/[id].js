import User from "@/models/User";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method, query: {id} } = req; // query id ile geliyor

  if (method === "GET") {
    try {
      const user = await User.findById(id); 
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
  
};

export default handler;

import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  await dbConnect();
  
  const body= req.body; //body den değer almamız gerekiyor

  const user= await User.findOne({email: body.email}); // user modelinden buluyor email ile

  if (user) {
    res.status(400).json({message: "User already exists"}); // user zaten varsa hata döndürüyoruz
    return;
  }
  
  try {
    const newUser = await new User(body); // yeni bir user oluşturuyoruz
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10); // 10 tane salt oluşturuyoruz bcrypt kütüphanesinden
    // create hash
    newUser.password = await bcrypt.hash(newUser.password, salt); // passwordu hashliyoruz  ve yeni userın passworduna atıyoruz
    newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt); // confirmPasswordu hashliyoruz  ve yeni userın confirmPassworduna atıyoruz
    await newUser.save(); // yeni userı kaydediyoruz 
    res.status(200).json(newUser); // yeni userı döndürüyoruz
  }catch (error) {
    console.log(error);
  }


};

export default handler;

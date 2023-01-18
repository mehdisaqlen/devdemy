import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../../models/UserSchema";
import connectToDatabase from "../../middleware/connectToDatabase";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    // console.log(req.body);
    let user = await User.findOne({ email: email });

    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, "secret");
      let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
      if (email === user.email && password === decryptedPass) {
        const token = jwt.sign(
          { email: user.email, name: user.name },
          "jwt-secret"
        );
        res.status(200).json({ success: true, token });
        res.redirect("/");
      } else {
        res.status(200).json({ success: false, msg: "Invalid credentials" });
        res.redirect("/login");
      }
    } else {
      res.status(200).json({ success: false, msg: "No user found!" });
      res.redirect("/login");
    }
  } else {
    res.status(200).json({ success: false, msg: "Method not allowed!" });
  }
};

export default connectToDatabase(handler);

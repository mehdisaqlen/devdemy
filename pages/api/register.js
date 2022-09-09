import connectToDatabase from "../../middleware/connectToDatabase";
import User from "../../models/UserSchema";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email } = req.body;
    const usedEmail = await User.findOne({ email: email });
    if (!usedEmail) {
      let user = new User({
        name,
        email,
        password: CryptoJS.AES.encrypt(req.body.password, "secret").toString(),
      });
      await user.save();
      res.json({ success: true, msg: "Account created" });
    } else if (usedEmail) {
      res.json({ success: false, msg: "Email is already taken!" });
    }
  } else {
    res.status(400).json({
      success: false,
      msg: `Sorry! We don't support ${req.method} method`,
    });
  }
};

export default connectToDatabase(handler);

import User from "../../models/UserSchema";
import connectToDatabase from "../../middleware/connectToDatabase";

const handler = async (req, res) => {
  let users = await User.find();
  res.status(200).json({ users });
};
export default connectToDatabase(handler);

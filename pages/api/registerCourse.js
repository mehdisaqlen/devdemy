import User from "../../models/UserSchema";
import connectToDatabase from "../../middleware/connectToDatabase";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { id, title, slug, level, lessons, category } = req.body;

    const registerCourse = async () => {
      const currentUser = await User.findOneAndUpdate(
        {
          _id: id,
        },

        { $addToSet: { courses: { title, slug, level, lessons, category } } },
        { strict: false }
      );
    };

    registerCourse();

    res.status(200).json("success true");
  } else {
    res.status(200).json("This endpoint does not support GET Method");
  }
};
export default connectToDatabase(handler);

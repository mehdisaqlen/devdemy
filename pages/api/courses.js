import Course from "../../models/CourseSchema";
import connectToDatabase from "../../middleware/connectToDatabase";

const handler = async (req, res) => {
  Course.findOneAndUpdate(
    { _id: "63e1dd45e1823464cc6d46ab" },
    { duration: "40 Days" },
    (err) => {
      console.log(err);
    }
  );

  let allCourses = await Course.find();
  res.status(200).json({ allCourses });
};
export default connectToDatabase(handler);

import { useState, useEffect } from "react";
import Container from "../components/Container";
import styles from "../styles/Course.module.scss";
// import allCourses from "../data/courseCatalogue.json";
import Card from "../components/Card";
import Course from "../models/CourseSchema";
import mongoose from "mongoose";

function courses({ allCourses }) {
  const [course, setCourse] = useState("all");
  const [activeTab, setActiveTab] = useState("all");
  const handleTab0 = () => {
    setActiveTab("all");
  };
  const handleTab1 = () => {
    setActiveTab("Cybersecurity");
  };
  const handleTab2 = () => {
    setActiveTab("Backend");
  };
  const handleTab3 = () => {
    setActiveTab("Frontend");
  };
  const handleTab4 = () => {
    setActiveTab("Machine Learning");
  };
  const handleTab5 = () => {
    setActiveTab("Data Science");
  };

  const catalogue =
    activeTab === "all"
      ? allCourses.filter((item) => {
          return item.category !== activeTab;
        })
      : allCourses.filter((item) => {
          return item.category === activeTab;
        });

  useEffect(() => {
    localStorage.setItem("AllCourses", JSON.stringify(allCourses));
  }, []);

  return (
    <div className={styles.coursePage}>
      <Container>
        <header className={styles.header}>
          <h1>Courses Catalogue</h1>
          <p>Browse All Courses</p>
        </header>
      </Container>
      <section className={styles.courseContainer}>
        <Container>
          <div className={styles.courseTabs}>
            <ul>
              <li
                className={activeTab === "all" ? "activeTab" : ""}
                onClick={handleTab0}
              >
                All
              </li>
              <li
                className={activeTab === "Cybersecurity" ? "activeTab" : ""}
                onClick={handleTab1}
              >
                Cybersecurity
              </li>
              <li
                className={activeTab === "Backend" ? "activeTab" : ""}
                onClick={handleTab2}
              >
                Backend
              </li>
              <li
                className={activeTab === "Frontend" ? "activeTab" : ""}
                onClick={handleTab3}
              >
                Frontend
              </li>
              <li
                className={activeTab === "Machine Learning" ? "activeTab" : ""}
                onClick={handleTab4}
              >
                Machine Learning
              </li>
              <li
                className={activeTab === "Data Science" ? "activeTab" : ""}
                onClick={handleTab5}
              >
                Data Science
              </li>
            </ul>
          </div>

          <div className={styles.cardContainer}>
            {catalogue.map((item) => {
              return (
                <Card
                  key={item.id}
                  path={"courses/" + item.slug}
                  category={item.category}
                  title={item.title}
                  level={item.level}
                  lessons={item.lessons}
                />
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let allCourses = await Course.find();

  return {
    props: { allCourses: JSON.parse(JSON.stringify(allCourses)) },
  };
}

export default courses;

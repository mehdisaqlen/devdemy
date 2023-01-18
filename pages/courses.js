import { useState } from "react";
import Container from "../components/Container";
import styles from "../styles/Course.module.scss";
import allCourses from "../data/courseCatalogue.json";
import Card from "../components/Card";

function courses() {
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

  // const cybersecurity = allCourses.filter((course) => {
  //   return course.category === "Cybersecurity";
  // });
  // const frontend = allCourses.filter((course) => {
  //   return course.category === "Frontend";
  // });
  // const backend = allCourses.filter((course) => {
  //   return course.category === "Backend";
  // });
  // const machineLearning = allCourses.filter((course) => {
  //   return course.category === "Machine Learning";
  // });
  // const dataScience = allCourses.filter((course) => {
  //   return course.category === "Data Science";
  // });
  const catalogue =
    activeTab === "all"
      ? allCourses.filter((item) => {
          return item.category !== activeTab;
        })
      : allCourses.filter((item) => {
          return item.category === activeTab;
        });

  console.log("Catalogue.....");
  console.log(catalogue);
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
                  path={item.path}
                  category={item.category}
                  title={item.title}
                  level={item.level}
                  lessons={item.lessons}
                />
              );
            })}

            {/* {activeTab === "tab1"
              ? cybersecurity.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      path={item.path}
                      category={item.category}
                      title={item.title}
                      level={item.level}
                      lessons={item.lessons}
                    />
                  );
                })
              : ""}
            {activeTab === "tab2"
              ? backend.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      path={item.path}
                      category={item.category}
                      title={item.title}
                      level={item.level}
                      lessons={item.lessons}
                    />
                  );
                })
              : ""}
            {activeTab === "tab3"
              ? frontend.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      path={item.path}
                      category={item.category}
                      title={item.title}
                      level={item.level}
                      lessons={item.lessons}
                    />
                  );
                })
              : ""}
            {activeTab === "tab4"
              ? machineLearning.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      path={item.path}
                      category={item.category}
                      title={item.title}
                      level={item.level}
                      lessons={item.lessons}
                    />
                  );
                })
              : ""}
            {activeTab === "tab5"
              ? dataScience.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      path={item.path}
                      category={item.category}
                      title={item.title}
                      level={item.level}
                      lessons={item.lessons}
                    />
                  );
                })
              : ""} */}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default courses;

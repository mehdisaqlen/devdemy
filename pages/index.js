import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Button from "../components/Button";
import Container from "../components/Container";
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../components/Card";
import allCourses from "../data/courseCatalogue.json";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };
  const handleTab5 = () => {
    setActiveTab("tab5");
  };

  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    let jwtToken = localStorage.getItem("token");
    if (jwtToken !== "") {
      setToken(jwtToken);
    }
  }, router.query);

  const cybersecurity = allCourses.filter((course) => {
    return course.category === "Cybersecurity";
  });
  const frontend = allCourses.filter((course) => {
    return course.category === "Frontend";
  });
  const backend = allCourses.filter((course) => {
    return course.category === "Backend";
  });
  const machineLearning = allCourses.filter((course) => {
    return course.category === "Machine Learning";
  });
  const dataScience = allCourses.filter((course) => {
    return course.category === "Data Science";
  });

  console.log("hello lllll");

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h1>
                Start Learning Coding in Seconds!
                {/* {token == undefined || token == ""
                  ? "Learn todays in-demand programing skills"
                  : "Welcome back!"} */}
              </h1>
              {/* <p>
                {token == undefined || token == ""
                  ? `Join DevDemy today to learn thousands of programing courses for
                free. Learn the latest in-demand technologies and boost up your
                career.`
                  : "You are currently logged in."}
              </p> */}
              <p>The coding academy built for you to learn everything.</p>
              {/* {token == undefined || token == "" ? (
                <div className={styles.buttonWrapper}>
                  <Button title="Get Started" url="/register" type="fill" />
                  <Button
                    title="Explore Courses"
                    url="/courses"
                    type="outline"
                  />
                </div>
              ) : null} */}
              <div className={styles.buttonWrapper}>
                <Button title="Get Started" url="/register" type="fill" />
                <Button title="Explore Courses" url="/courses" type="outline" />
              </div>
            </div>

            <div className={styles.heroImage}>
              <Image
                src="/developer.svg"
                layout="fill"
                objectFit="contain"
                alt="developer"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className={`${styles.whatIsWrapper} bgBlue`}>
        <Container>
          <div className={styles.whatIsSection}>
            <h2>What is DevDemy?</h2>
            <p>
              Learn market in-demand coding skills and get ready for the jobs.
              DevDemy offers the job-ready skills through its courses
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.courseWrapper}>
        <Container>
          <div className={styles.coursesSection}>
            <p>Start Learning</p>
            <h2>Popular Courses</h2>

            <div className={styles.courseTabs}>
              <ul>
                <li
                  className={activeTab === "tab1" ? "activeTab" : ""}
                  onClick={handleTab1}
                >
                  Cybersecurity
                </li>
                <li
                  className={activeTab === "tab2" ? "activeTab" : ""}
                  onClick={handleTab2}
                >
                  Backend
                </li>
                <li
                  className={activeTab === "tab3" ? "activeTab" : ""}
                  onClick={handleTab3}
                >
                  Frontend
                </li>
                <li
                  className={activeTab === "tab4" ? "activeTab" : ""}
                  onClick={handleTab4}
                >
                  Machine Learning
                </li>
                <li
                  className={activeTab === "tab5" ? "activeTab" : ""}
                  onClick={handleTab5}
                >
                  Data Science
                </li>
              </ul>
            </div>
            <div className={styles.cardContainer}>
              {activeTab === "tab1"
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
                : ""}
            </div>
            <div className={styles.exploreButton}>
              <Button
                title="Browse All Courses"
                url="/courses"
                type="dark-fill"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.whatIsWrapper}>
        <Container>
          <div className={styles.whatIsSection}>
            <h2>Why devdemy?</h2>
            <p>
              If you want to get a job at Google, Facebook, Amazon, or at
              Microsoft, then sign up today for devdemy to get job-ready coding
              skills right now.
            </p>

            <div className={styles.exploreButton}>
              <Button title="Register For Free" url="/register" type="fill" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

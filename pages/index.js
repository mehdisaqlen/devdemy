import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Button from "../components/Button";
import Container from "../components/Container";
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../components/Card";
import allCourses from "../data/courseCatalogue.json";
import jwt from "jsonwebtoken";
import Course from "../models/CourseSchema";
import mongoose from "mongoose";

export default function Home({ allCourses }) {
  const [activeTab, setActiveTab] = useState("Cybersecurity");

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

  const [token, setToken] = useState("");
  const [decodedToken, setDecodedToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    let jwtToken = localStorage.getItem("token");
    setDecodedToken(jwt.decode(jwtToken));
    if (jwtToken !== "") {
      setToken(jwtToken);
    }

    let isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [router.query]);

  const catalogue =
    activeTab === "all"
      ? allCourses.filter((item) => {
          return item.category !== activeTab;
        })
      : allCourses.filter((item) => {
          return item.category === activeTab;
        });

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
                  className={
                    activeTab === "Machine Learning" ? "activeTab" : ""
                  }
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

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let allCourses = await Course.find();

  return {
    props: { allCourses: JSON.parse(JSON.stringify(allCourses)) },
  };
}

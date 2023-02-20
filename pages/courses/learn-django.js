import React from "react";
import Container from "../../components/Container";
import styles from "../../styles/coursePage.module.scss";
import Button from "../../components/Button";
import Link from "next/link";

function Django() {
  return (
    <main className={styles.main}>
      <div className={styles.bg}>
        <Container>
          <header className={styles.header}>
            <p className={styles.breadcrumb}>
              <span>
                <Link href="/courses">
                  <a>Courses </a>
                </Link>
                ›
              </span>
              <span> Learn Django</span>
            </p>
            <h1>Learn Django</h1>
            <p>
              Django is a back-end server side web framework. Django is free,
              open source and written in Python. Django makes it easier to build
              web pages using Python.
            </p>

            <div style={{ display: "inline-block", marginTop: 35 }}>
              <Button url="#" title="Enroll For Free" type="dark-fill" />
            </div>
          </header>
        </Container>
      </div>
      <div className={styles.aboutSection}>
        <Container>
          <h2>Description</h2>
          <p>
            Welcome to the Python and Django Full Stack Web Developer Bootcamp!
            In this course we cover everything you need to know to build a
            website using Python, Django, and many more web technologies!
          </p>

          <p>
            Whether you want to change career paths, expand your current skill
            set, start your own entrepreneurial business, become a consultant,
            or just want to learn, this is the course for you!
          </p>

          <p>
            We will teach you the latest technologies for building great web
            applications with Python 3 and Django! But we don't just teach that,
            we also teach the Front End technologies you need to know, including
            HTML, CSS, and Javascript. This course can be your one stop shop for
            everything you need! It will serve as a useful reference for many of
            your questions as you begin your journey in becoming a web
            developer!
          </p>
          <p>
            This course is designed so that anyone can learn how to become a web
            developer. We teach you how to program by using HD Video Lectures,
            Walkthrough Code Projects, Exercises, Concept Presentation Slides,
            Downloadable Code Notes, Reading Assignments, and much more!
          </p>

          <div className={styles.skillBox}>
            <h2>Skills You Gain</h2>
            <div className={styles.skillContainer}>
              <ul>
                <li className={styles.skillChip}>
                  Basics of Backend Development
                </li>
                <li className={styles.skillChip}>EJS Engine</li>
                <li className={styles.skillChip}>HTTP Requests</li>
                <li className={styles.skillChip}></li>
              </ul>
              <ul>
                <li className={styles.skillChip}>MongoDB</li>
                <li className={styles.skillChip}>NGNIX Server</li>
                <li className={styles.skillChip}>Deploying to Heroku</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default Django;

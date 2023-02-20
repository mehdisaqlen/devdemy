import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import styles from "../../styles/coursePage.module.scss";
import Button from "../../components/Button";
import Link from "next/link";
import jwt from "jsonwebtoken";

function EthicalHacking() {
  const [course, setCourse] = useState("");
  const [token, setDecodedToken] = useState("");

  useEffect(() => {
    let courses = JSON.parse(localStorage.getItem("AllCourses"));
    setCourse(courses[0]);
    let jwtToken = localStorage.getItem("token");
    setDecodedToken(jwt.decode(jwtToken));
  }, []);

  const { title, slug, level, lessons, category } = course;

  const registerCourse = async () => {
    const checkAuth = localStorage.getItem("LoggedIn");

    if (checkAuth === false) {
      alert("FALSE.........................");
    } else {
      const data = { title, slug, level, lessons, category };
      const endpoint = "/api/registerCourse";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      let res = await fetch(endpoint, options);
      let response = await res.json();
    }
  };

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
              <span> {course.title}</span>
            </p>
            <h1>{course.title}</h1>
            <p>
              Ethical hacking involves an authorized attempt to gain
              unauthorized access to a computer system, application, or data.
              Carrying out an ethical hack involves duplicating strategies and
              actions of malicious attackers.
            </p>
            <div style={{ display: "inline-block", marginTop: 35 }}>
              <button onClick={registerCourse} className="btn dark-fill">
                Enroll The Course{" "}
              </button>
            </div>
          </header>
        </Container>
      </div>
      <div className={styles.aboutSection}>
        <Container>
          <h2>Description</h2>
          <p>
            Gain the ability to do ethical hacking and penetration testing by
            taking this course! Get answers from an experienced IT expert to
            every single question you have related to the learning you do in
            this course including installing Kali Linux, using VirtualBox,
            basics of Linux, Tor, Proxychains, VPN, Macchanger, Nmap, cracking
            wifi, aircrack, DoS attacks, SLL strip, known vulnerabilities, SQL
            injections, cracking Linux passwords, and more topics that are added
            every month!
          </p>

          <p>
            If you are like me, you are reading more now because you want to
            know for sure whether this course is worth taking before you invest
            your money and time in it. More than10,000 people have already
            completed the process of deciding to take this course and I hope
            sharing a few of their experiences can prove useful for you here.
            Here are what three recent students had to say in the reviews in
            their own words.
          </p>

          <div className={styles.skillBox}>
            <h2>Skills You Gain</h2>
            <div className={styles.skillContainer}>
              <ul>
                <li className={styles.skillChip}>Hacking basics</li>
                <li className={styles.skillChip}>
                  Computer Security and Hardware
                </li>
                <li className={styles.skillChip}>Basics of IoT</li>
                <li className={styles.skillChip}>HTML</li>
              </ul>
              <ul>
                <li className={styles.skillChip}>Basic of JavaScript</li>
                <li className={styles.skillChip}>Computer Networking</li>
                <li className={styles.skillChip}>Network Packets</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default EthicalHacking;

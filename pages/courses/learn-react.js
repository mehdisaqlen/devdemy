import React from "react";
import Container from "../../components/Container";
import styles from "../../styles/coursePage.module.scss";
import Button from "../../components/Button";
import Link from "next/link";

function KaliLinux() {
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
              <span> Learn React</span>
            </p>
            <h1>Learn React</h1>
            <p>
              React is an extremely useful programming language for
              cybersecurity professionals because it can act as multitasking
              cybersecurity functions, including malware analysis, scanning, and
              penetration testing tasks.
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
          <p>Learn the basics of Ethical Hacking with Kali Linux.</p>
          <p>
            The goal of this course is to help you learn the basic fundamentals
            of hacking and to give you an introduction to becoming an ethical
            hacker. This course targets students who have little or no
            experience in hacking or penetration testing.
          </p>
          <p>
            In this course you will not only learn the theory behind hacking but
            you will also learn the practical side of ethical hacking. You will
            learn how to set up your own virtual lab environment just like the
            one used in this course. You will be able to follow the step you see
            in the lecture and replicate them in your own lab in environment.
            This course also has PDFs for each of the lectures to help you
            follow along.
          </p>
          <p>
            Also the software you will need for this course is free. If you are
            looking to get a good foundation in ethical hacking with Kali Linux
            enroll today and get started!
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
                <li className={styles.skillChip}>WireShark</li>
                <li className={styles.skillChip}>NMAP</li>
                <li className={styles.skillChip}>Building Hacking Lab</li>
                <li className={styles.skillChip}>Footprinting</li>
              </ul>
              <ul>
                <li className={styles.skillChip}>
                  Principles of Ethical Hacking
                </li>
                <li className={styles.skillChip}>Kali Linux</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default KaliLinux;

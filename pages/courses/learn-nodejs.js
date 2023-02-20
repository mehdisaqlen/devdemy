import React from "react";
import Container from "../../components/Container";
import styles from "../../styles/coursePage.module.scss";
import Button from "../../components/Button";
import Link from "next/link";

function NodeJS() {
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
              <span> Learn NodeJS</span>
            </p>
            <h1>Learn NodeJS</h1>
            <p>
              Node.js is a cross-platform, open-source server environment that
              can run on Windows, Linux, Unix, macOS, and more. Node.js is a
              back-end JavaScript runtime environment, runs on the V8 JavaScript
              Engine, and executes JavaScript code outside a web browser.
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
            NodeJS is a platform that allows developers to write server side
            high performance and networked applications. And that too using good
            old Javascript. But wait ! Isn't Javascript meant to be used for
            forms and stuff on web pages ?
          </p>

          <p>
            Well that was 10 years ago. The world has gone from 'Oops! You've
            not filled up the form properly !' days to today's modern web apps
            and social media sites that rely heavily on Javascript. Google Apps,
            Facebook, Twitter, Google Plus and LinkedIn, being handful examples
            of this movement. And to think that this quantum leap would not have
            been possible without Javascript is not an overstatement. Today,
            when you socialize with your friends on Facebook, or use your Gmail
            inbox, you're running thousands of lines of code written in
            Javascript, in your browser.
          </p>
          <p>
            With Node JS, you can take this knowledge back on the server, where
            usually you would expect to see the likes of PHP, Ruby, ASP dot NET
            etc. But that's only a small portion of the reason why NodeJS is so
            cool. The fact that you can write full blown networked applications
            (think chat servers, collaborative tools, real-time data
            visualisation apps) with just a few lines of code is more than
            reason enough to not only look at NodeJS, but deep dive into it !
          </p>

          <div className={styles.skillBox}>
            <h2>Skills You Gain</h2>
            <div className={styles.skillContainer}>
              <ul>
                <li className={styles.skillChip}>
                  Basics of Backend Development
                </li>
                <li className={styles.skillChip}>EJS Engine</li>
                <li className={styles.skillChip}>ExpressJS</li>
                <li className={styles.skillChip}>NoSQL DB</li>
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

export default NodeJS;

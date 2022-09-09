import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Button from "../components/Button";
import Container from "../components/Container";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Home() {
  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    let jwtToken = localStorage.getItem("token");
    if (jwtToken !== "") {
      setToken(jwtToken);
    }
  }, router.query);
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h1>
                {token == undefined || token == ""
                  ? "Learn todays in-demand programing skills"
                  : "Welcome back!"}
              </h1>
              <p>
                {token == undefined || token == ""
                  ? `Join DevDemy today to learn thousands of programing courses for
                free. Learn the latest in-demand technologies and boost up your
                career.`
                  : "You are currently logged in."}
              </p>
              {token == undefined || token == "" ? (
                <div className={styles.buttonWrapper}>
                  <Button title="Get Started" url="/register" type="fill" />
                  <Button
                    title="Explore Courses"
                    url="/courses"
                    type="outline"
                  />
                </div>
              ) : null}
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
    </>
  );
}

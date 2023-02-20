import React, { useState, useEffect } from "react";
import styles from "../styles/Login.module.scss";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ msg: "", type: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const togglePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const SignIn = async (e) => {
    if (email !== "" && password !== "") {
      e.preventDefault();
      const data = { email, password };
      const endpoint = "/api/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      setIsLoading(true);
      let res = await fetch(endpoint, options);
      let response = await res.json();

      if (response.success) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("LoggedIn", true);
        setIsAuthenticated(localStorage.getItem("isAuthenticated"));
        setMessage({ msg: "Successfully logged in", type: "success" });
        setEmail("");
        setPassword("");
        setIsLoading(false);
        router.push("/dashboard");
      } else if (response.success == false) {
        setMessage({ msg: response.msg, type: "error" });
        router.push("/login");
        setEmail("");
        setPassword("");
        setIsLoading(false);
      }
    } else {
      setMessage({ msg: "All fields are required!", type: "error" });
    }
  };

  return (
    <section className={styles.main}>
      <form action="/api/login" method="POST" className={styles.form}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src="/logo.svg"
                width={140}
                height={140}
                alt="logo"
                className={styles.svg}
              />
            </a>
          </Link>
        </div>
        <h1>Sign in to your account.</h1>
        <p>Enter your email and password to login</p>
        <div className={styles.container}>
          <input
            type="email"
            placeholder="Enter email address"
            name="email"
            id="email"
            required={true}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            value={email}
          />

          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              id="password"
              className={styles.password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              type="button"
              onClick={togglePasswordShow}
              className={styles.showPassword}
            >
              {showPassword ? <VscEyeClosed /> : <VscEye />}
            </button>
          </div>
          <p className={message.type}>
            {message.msg !== "" ? message.msg : null}
          </p>
          <button
            type="submit"
            name="submit"
            className={styles.submitButton}
            onClick={SignIn}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </div>
        <p className={styles.desc}>
          New to Devdemy?{" "}
          <Link href="/register">
            <a>Sign up</a>
          </Link>
        </p>
      </form>
    </section>
  );
}

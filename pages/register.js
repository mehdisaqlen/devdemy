import React, { useState } from "react";
import styles from "../styles/Login.module.scss";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
export default function register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ msg: "", type: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordShow = () => {
    setShowPassword(!showPassword);
  };
  const createAccount = async (e) => {
    if (name !== "" && email !== "" && password !== "") {
      const data = { name, email, password };
      const endpoint = "/api/register";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      setIsLoading(true);
      e.preventDefault();
      let res = await fetch(endpoint, options);
      let response = await res.json();
      if (response.success) {
        setMessage({ msg: response.msg, type: "success" });
        setName("");
        setEmail("");
        setPassword("");
        setIsLoading(false);
      } else if (response.success == false) {
        setMessage({ msg: response.msg, type: "error" });
        setName("");
        setEmail("");
        setPassword("");
        setIsLoading(false);
      }
    } else {
      setMessage({ msg: "All fields are required!", type: "error" });
    }
  };

  return (
    <section className={styles.main} style={{ marginTop: -70 }}>
      <form action="/api/register" method="POST" className={styles.form}>
        <h1>Sign up a free account</h1>
        <p>Enter the details to create an account</p>
        <div className={styles.container}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            required={true}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Enter email address"
            name="email"
            id="email"
            required={true}
            className={styles.middleInput}
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
            onClick={createAccount}
          >
            {isLoading ? "Loading..." : "Create an Account"}
          </button>
        </div>
        <p className={styles.desc}>
          Already have an account?{" "}
          <Link href="/login">
            <a>Sign in</a>
          </Link>
        </p>
      </form>
    </section>
  );
}

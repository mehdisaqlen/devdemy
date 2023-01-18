import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    let jwtToken = localStorage.getItem("token");
    if (jwtToken !== "") {
      setToken(jwtToken);
    }
  }, router.query);

  const logOut = () => {
    localStorage.removeItem("token");
    location.reload();
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link href="/">
            <a>
              <Image src="/logo.svg" width="120" height="120" alt="Logo" />
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Explore Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>

          <li
            style={{
              backgroundColor: "rgb(206, 210, 229)",
              width: 0.5,
              height: "25",
            }}
          ></li>
          {!token ? (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          ) : (
            <li onClick={logOut} className="sm-button red">
              <Link href="/">
                <a>Sign out</a>
              </Link>
            </li>
          )}
          {!token ? (
            <li className="sm-button">
              <Link href="/register">
                <a>Register</a>
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

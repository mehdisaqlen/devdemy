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
          <Image src="/logo.svg" width="40" height="40" alt="Logo" />
          <span>Devdemy</span>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {!token ? (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          ) : (
            <li onClick={logOut}>
              <Link href="/">
                <a>Sign out</a>
              </Link>
            </li>
          )}
          {!token ? (
            <li>
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

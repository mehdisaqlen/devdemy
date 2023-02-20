import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Dashboard.module.scss";
import Link from "next/link";
import {
  BsFilePerson,
  BsGrid,
  BsFillFileEarmarkTextFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";

function Sidebar() {
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);
  return (
    <div className={styles.col1}>
      <ul>
        <li>
          <Link href="/dashboard">
            <a className={router.pathname == "/dashboard" ? "active-link" : ""}>
              <BsFilePerson />
              My Account
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/my-courses">
            <a
              className={
                router.pathname == "/dashboard/my-courses" ? "active-link" : ""
              }
            >
              <BsGrid />
              My Courses
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/resources">
            <a
              className={
                router.pathname == "/dashboard/resources" ? "active-link" : ""
              }
            >
              <BsFillFileEarmarkTextFill />
              Resources
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/help">
            <a
              className={
                router.pathname == "/dashboard/help" ? "active-link" : ""
              }
            >
              <BsFillInfoCircleFill />
              Help
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

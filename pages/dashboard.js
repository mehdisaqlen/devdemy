import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "../components/Container";
import styles from "../styles/Dashboard.module.scss";
import Sidebar from "../components/Sidebar";
import jwt from "jsonwebtoken";

function Dashboard() {
  const [name, setName] = useState("");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };
  const handleTab5 = () => {
    setActiveTab("tab5");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    let auth = localStorage.getItem("isAuthenticated");
    if (!auth) {
      router.push("/");
    } else {
      localStorage.setItem("name", jwt.decode(token).name);
      setName(localStorage.getItem("name"));
    }
  }, []);

  return (
    <Container>
      <div className={styles.grid}>
        <Sidebar />
        <div className={styles.col2}>
          <div className={styles.welcomeCard}>
            <h3>Welcome Back {name}!</h3>
            <p>We are glad you are here again. </p>
          </div>

          <div className={styles.courseTabs}>
            <ul>
              <li
                className={activeTab === "tab1" ? "activeTab" : ""}
                onClick={handleTab1}
              >
                Home
              </li>
              <li
                className={activeTab === "tab2" ? "activeTab" : ""}
                onClick={handleTab2}
              >
                Inprogress
              </li>
              <li
                className={activeTab === "tab3" ? "activeTab" : ""}
                onClick={handleTab3}
              >
                Completed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;

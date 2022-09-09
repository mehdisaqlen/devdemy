import "../styles/globals.scss";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      console.log("User is logged in");
      if (router.pathname == "/login" || router.pathname == "/register") {
        router.push("/");
      }
    } else {
      setIsLoggedIn;
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

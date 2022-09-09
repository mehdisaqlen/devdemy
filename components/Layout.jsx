import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const router = useRouter();
  const pagesWithNotHeaderFooter = ["/login", "register"];

  return (
    <>
      {pagesWithNotHeaderFooter.includes(router.asPath) ? null : <Navbar />}

      <main>{children}</main>

      {pagesWithNotHeaderFooter.includes(router.asPath) ? null : <Footer />}
    </>
  );
}

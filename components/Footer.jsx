import Link from "next/link";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.footer}>
        <p>
          Copyright{" "}
          <Link href="/">
            <a className={styles.link}>Devdemy</a>
          </Link>{" "}
          &copy; 2022
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <nav className={styles.footerNav}>
            <div className={styles.col}>
              <div className={styles.footerBrand}>
                <Link href="/">
                  <a className={styles.brand}>
                    <Image
                      src="/logo2.svg"
                      width="120"
                      height="120"
                      alt="Logo"
                      className={styles.logo}
                    />
                  </a>
                </Link>

                <ul className={styles.socialIcons}>
                  <li>
                    <Link href="#">
                      <a>
                        <Image
                          src={"/images/icons/facebook.svg"}
                          width={20}
                          height={20}
                          alt="facebook"
                        />
                        <span className={styles.label}>Facebook</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <Image
                          src="/images/icons/instagram.svg"
                          width={20}
                          height={20}
                          alt="instagram"
                        />
                        <span className={styles.label}>Instagram</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <Image
                          src="/images/icons/youtube.svg"
                          width={20}
                          height={20}
                          alt="youtube"
                        />
                        <span className={styles.label}>YouTube</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <Image
                          src="/images/icons/twitter.svg"
                          width={20}
                          height={20}
                          alt="twitter"
                        />
                        <span className={styles.label}>Twitter</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.col}>
              <h2>Navigation</h2>
              <ul>
                <li>
                  <Link href="#">
                    <a>All Courses</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Frontend</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Backend</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Machine Learning</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Cybersecurity</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.col}>
              <h2>Information</h2>
              <ul>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/privacy">
                    <a>Privacy</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Signup</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
        <Container>
          <div className={styles.copyright}>
            &copy; {year} —
            <Link href="/" style={{ color: "black" }}>
              <a> DevDemy </a>
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

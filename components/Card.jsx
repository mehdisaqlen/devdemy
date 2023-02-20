import styles from "../styles/Card.module.scss";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
export default function Card(props) {
  return (
    <div className={styles.card}>
      <Link href={props.path}>
        <a>
          <div className={styles.cardWrapper}>
            <div className={styles.header}>
              <p>{props.category}</p>
              <h3>{props.title}</h3>
            </div>
            <div className={styles.cardBody}>
              <p>{props.level}</p>
              <p>
                <strong>{props.lessons}</strong> Lessons
              </p>

              <div className={styles.goButton}>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

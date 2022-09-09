import Image from "next/image";
import styles from "../styles/Card.module.scss";

export default function Card() {
  return (
    <div className={styles.card}>
      <Image
        src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt="course"
        width={550}
        height={340}
        layout="responsive"
      />
      <div className={styles.teacherAvatar}>
        <Image
          src="/teacher.webp"
          alt="course"
          objectFit="contain"
          layout="fill"
          className={styles.avatar}
        />
      </div>

      <div className={styles.cardBody}>
        <h3>Hacking 101</h3>
        <p>Learn ethical hacking from scratch.</p>
        button
      </div>
    </div>
  );
}

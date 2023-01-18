import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import styles from "../styles/Button.module.scss";
export default function Button({ url, title, type }) {
  return (
    <Link href={url}>
      <a className={`${styles.btn} ${type} `}>
        {title} <BsChevronRight />
      </a>
    </Link>
  );
}

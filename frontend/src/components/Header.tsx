import Link from "next/link";
import styles from "@/styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}

import Header from "./Header"
import styles from "@/styles/components/Layout.module.css";
function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.app}>{children}</div>
    </div>
  )
}
export default Layout;

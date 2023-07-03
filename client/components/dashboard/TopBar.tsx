import Image from "next/image";
import styles from "@/styles/dashboard/topbar.module.css";

function TopBar() {
  return (  
    <div className={`${styles.container}`}>
      <h1>Dashboard</h1>
      <div className={styles.right}>
        <div className={styles.search}>
          <input type='text' placeholder="Search..." />
          <Image width={15} height={15} alt="icon" src="/dashboard/search-icon.svg" />
        </div>
        <img src="/dashboard/Bell.svg" />
        <img src="/dashboard/User.png" style={{ borderRadius: "50%" }} />
      </div>
    </div>
  )
}

export default TopBar;
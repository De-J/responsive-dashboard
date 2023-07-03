import { FC } from "react";
import styles from "@/styles/dashboard/sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

const Sidebar: FC = () => {
    const list = [
        "Dashboard",
        "Transactions",
        "Schedules",
        "Users",
        "Settings"
    ]
    let i = 1;
    return (
        <aside className={styles.aside}>
            <h1>Board.</h1>
            <ul>
                {list.map(item => (
                    <Link key={i++} href="/">
                        <li className={styles.item}>
                            <Image
                                height="20"
                                width="20"
                                src={`/dashboard/sidebar/${item.toLowerCase()}_icon.svg`}
                                alt={`${item.toLowerCase()}_icon`} />
                            <p>{item}</p>
                        </li>
                    </Link>
                ))}
            </ul>
            <div className={styles.support}>
                <p><Link href="/">Help</Link></p>
                <p><Link href="/">Contact Us</Link></p>
            </div>
        </aside>
    )
}

export default Sidebar;
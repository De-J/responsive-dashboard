import Sidebar from "@/components/Sidebar"
import styles from "@/app/home/page.module.css"
import Chart from "@/components/dashboard/Chart"
import Piechart from "@/components/dashboard/Piechart"
import Summary from "@/components/dashboard/Summary"
import TopBar from "@/components/dashboard/TopBar"
import Schedule from "@/components/dashboard/Schedule"
import { HiMenu } from "react-icons/hi";
import { Navbar, NavItem, DropdownMenu } from "@/components/dashboard/Navbar"

export default function Home() {
    return (
        <main className={`${styles.container} main-container`}>
            <Sidebar />

            <section className={styles.right}>
                <Navbar >
                    <NavItem icon={<HiMenu />} >
                        <DropdownMenu />
                    </NavItem>
                </Navbar>
                <TopBar />
                <Summary />
                <Chart />
                <div className={`${styles.bottom} bottom`}>
                    <Piechart />
                    <Schedule />
                </div>
            </section>

        </main>
    )
}
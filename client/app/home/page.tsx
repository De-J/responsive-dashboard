import Sidebar from "@/components/Sidebar"
import styles from "@/app/home/page.module.css"
import Chart from "@/components/dashboard/Chart"
import Piechart from "@/components/dashboard/Piechart"
import Summary from "@/components/dashboard/Summary"
import TopBar from "@/components/dashboard/TopBar"
import Schedule from "@/components/dashboard/Schedule"


export default function Home() {
    return (
        <main className={`${styles.container} main-container`}>
            <Sidebar />
            
            <section className={styles.right}>
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
import Image from "next/image";
import styles from "@/styles/dashboard/schedule.module.css";

const data = [
    {
        text: "Meeting with suppliers from Kuta Bali",
        time: "14.00-15.00",
        location: "at Sunset Road, Kuta, Bali",
        color: "#9bdd7c"
    },
    {
        text: "Check operation at Giga Factory 1",
        time: "18.00-20.00",
        location: "at Central Jakarta",
        color: "#6972C3" 
    }
]



function Schedule() {
    return (
        <div className={styles.container}>
            <div>
                <p style={{fontWeight: 700}}>Today&apos;s schedule</p>
                <button>
                    See all
                    <Image height="10" width={10} alt="icon" src="/dashboard/side-arrow.svg" />
                </button>
            </div>
            
            <List />
        </div>
    )
}

function List() {
    let i = 1, j=10, k=20, l=30;
    return (
    <ul className={styles.list}>
        {data.map(item => (
            <li key={i++} className={styles.item} style={{borderColor: item.color}}>
                <p key={`${j++}`} style={{fontWeight: 700}}>{item.text}</p>
                <p key={k++}>{item.time}</p>
                <p key={l++}>{item.location}</p>
            </li>
        ))}
    </ul>
  )
}

export default Schedule
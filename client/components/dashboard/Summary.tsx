import Image from 'next/image'
import { FC } from 'react'
import styles from "@/styles/dashboard/summary.module.css"

const items = [
  {
    heading: "Total Revenues", 
    text: "$2,129,430",
    color: "#DDEFE0",
  },
  {
    heading: "Total Transactions", 
    text: "1,520",
    color: "#F4ECDD",
  },
  {
    heading: "Total Likes", 
    text: "9,721",
    color: "#EFDADA",
  },
  {
    heading: "Total Users", 
    text: "892",
    color: "#DEE0EF",
  }
]

let i = 1;
const Summary: FC = () => {
  return (
    <div className={`${styles.summary} summary-resp`}>
      {items.map(item => <Block key={i++} {...item} />)}
    </div>
  )
}

interface BlockProps {
  heading: string,
  text: string,
  color: string
}

const Block: FC<BlockProps> = ({ heading, text, color }) => {

  return (
    <div className={styles.block} style={{backgroundColor: color}}>
      <div>
        <Image width={20} height={20} alt="icon" src={`/dashboard/summary/${heading.toLowerCase().replace(' ', '_') + "_icon"}.svg`} />
      </div>
      <p>{heading}</p>
      <h1>{text}</h1>
    </div>
  )
}


export default Summary;
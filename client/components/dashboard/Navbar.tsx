"use client"
import styles from "@/styles/dashboard/navbar.module.css";
import { ReactNode, useState } from "react";
import { RiPieChartLine } from "react-icons/ri"
import { BsTags } from "react-icons/bs"
import { AiOutlineCalendar } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { LiaCogSolid } from "react-icons/lia"

interface NavbarProps {
    children: ReactNode;
}

export const Navbar = (props: NavbarProps) => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>{props.children}</ul>
        </nav>
    )
}

interface NavItemProps {
    icon: React.ReactNode;
    children?: React.ReactNode;
}

export const NavItem = (props: NavItemProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <li className={styles.item}>
            <p
                className={styles.icon}
                onClick={() => setOpen(!open)}>
                {props.icon}
            </p>

            {open && props.children}
        </li>
    )

}

interface DropdownItemProps {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    goToMenu?: string;
    children?: React.ReactNode;
}

export const DropdownMenu = () => {
    function DropdownItem(props: DropdownItemProps) {
        return (
            <p className={styles.menuItem}>
                <span className={styles.icon}>{props.leftIcon}</span>
                {props.children}
            </p>
        )
    }
    return (
        <div className={styles.dropdown}>
            <DropdownItem leftIcon={<RiPieChartLine />}>Dashboard</DropdownItem>
            <DropdownItem leftIcon={<BsTags />}>Transactions</DropdownItem>
            <DropdownItem leftIcon={<AiOutlineCalendar />}>Schedules</DropdownItem>
            <DropdownItem leftIcon={<BiUserCircle />}>Users</DropdownItem>
            <DropdownItem leftIcon={<LiaCogSolid />}>Settings</DropdownItem>
        </div>
    )
} 

import Link from "next/link";
import { FC, useState } from "react";
import styles from "@/styles/login.module.css"
import { signIn } from "next-auth/react";

const Login: FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleClick = () => {
        signIn('google', {callbackUrl: "/home"});
    }

    return (
        <section className={styles.signIn}>
            <h1 className={styles.heading}>Sign In</h1>

            <p className={styles.text}>Sign in to your account</p>

            <div className={styles.sso}>
                <button 
                    className={styles.btn}
                    onClick={handleClick}>
                    <svg width="14" height="14" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.84363V11.307H13.8438C13.6365 12.428 12.9994 13.373 12.0489 14.0064V16.2534H14.9562C16.6601 14.6951 17.641 12.4029 17.641 9.67839C17.641 9.04502 17.5854 8.43176 17.4792 7.84865H9V7.84363Z" fill="#3E82F1"></path><path d="M9.00001 14.861C6.65394 14.861 4.67192 13.2876 3.96406 11.1714H0.955627V13.4937C2.43709 16.4142 5.48091 18.4198 9.00001 18.4198C11.432 18.4198 13.4697 17.6206 14.9562 16.2533L12.0489 14.0064C11.245 14.5443 10.2135 14.861 9.00001 14.861Z" fill="#32A753"></path><path d="M3.96404 5.45605H0.955617C0.348876 6.66246 0 8.02972 0 9.47238C0 10.915 0.348876 12.2823 0.955617 13.4887L3.96404 11.1714C3.78202 10.6335 3.6809 10.0605 3.6809 9.47238C3.6809 8.88426 3.78202 8.31122 3.96404 7.77336V5.45605Z" fill="#F9BB00"></path><path d="M0.955627 5.45597L3.96406 7.77327C4.67192 5.65703 6.65394 4.08368 9.00001 4.08368C10.3197 4.08368 11.5079 4.53608 12.4382 5.42078L15.0219 2.85214C13.4646 1.40948 11.427 0.52478 9.00001 0.52478C5.48091 0.52478 2.43709 2.53043 0.955627 5.45597Z" fill="#E74133"></path></svg>
                    <p>Sign in with Google</p>
                </button>

                <button className={styles.btn}>
                    <svg width="14" height="14" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6442 9.51027C12.6362 8.03572 13.3031 6.92277 14.6531 6.10313C13.8978 5.02232 12.7567 4.42768 11.25 4.31116C9.82366 4.19866 8.26473 5.14286 7.6942 5.14286C7.09152 5.14286 5.70938 4.35134 4.62455 4.35134C2.38259 4.3875 0 6.13929 0 9.70313C0 10.7558 0.192857 11.8433 0.578571 12.9656C1.09286 14.4402 2.94911 18.0563 4.88571 17.996C5.89821 17.9719 6.61339 17.2768 7.93125 17.2768C9.20893 17.2768 9.87187 17.996 11.0009 17.996C12.9536 17.9679 14.633 14.6813 15.1232 13.2027C12.5036 11.9692 12.6442 9.58661 12.6442 9.51027ZM10.3701 2.91295C11.467 1.61116 11.3665 0.425893 11.3344 0C10.3661 0.05625 9.24509 0.658929 8.60625 1.40223C7.90313 2.19777 7.48929 3.18214 7.57768 4.29107C8.62634 4.37143 9.58259 3.83304 10.3701 2.91295Z" fill="#999999"></path></svg>
                    <p>Sign in with Apple</p>
                </button>
            </div>
            <form className={styles.form}>
                <label>Email address</label>
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />

                <p><Link href="/">Forgot Password?</Link></p>
                <button className={styles.submit} type="submit">Sign In</button>
            </form>
            <p>Don&apos;t have an account? <Link href="/">Register here</Link></p>
        </section>
    )
}

export default Login;
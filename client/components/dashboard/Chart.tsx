"use client";
import { PureComponent } from "react";
import styles from "@/styles/dashboard/chart.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        User: 400,
        Guest: 240,
        // amt: 240,
    },
    {
        name: 'Week 1',
        User: 400,
        Guest: 240,
        // amt: 2400,
    },
    {
        name: 'Week 2',
        User: 300,
        Guest: 139,
        amt: 221,
    },
    {
        name: 'Week 3',
        User: 200,
        Guest: 980,
        amt: 229,
    },
    {
        name: 'Week 4',
        User: 278,
        Guest: 390,
        amt: 200,
    },
    {
        User: 400,
        Guest: 240,
        // amt: 240,
    }

];

export default class Chart extends PureComponent {


    render() {
        return (
            <div className={styles.chart}>
                <div style={{marginTop: 10}}>
                    <p style={{ fontWeight: 700, marginLeft: 20 }}>Activities</p>
                    <select style={{ marginLeft: 15, border: "none", fontFamily: "Montserrat", color: "#858585", outline: "none", background: "transparent" }}>
                        <option>May - June 2021</option>
                        <option>June - July 2021</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={180}>
                    <LineChart
                        width={200}
                        height={200}
                        data={data}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 10,
                            bottom: 5,
                        }}>
                        
                        <CartesianGrid vertical={false} stroke="#eaeaea" strokeDasharray="null" />
                        <XAxis dataKey="name" stroke="#858585" tickLine={false} />
                        <YAxis className={styles.transparent} stroke="#858585" tickLine={false} />
                        <Tooltip />
                        <Legend align="right" verticalAlign="top" iconType="circle" wrapperStyle={{ paddingTop: '15px', paddingBottom: '25px' }} />
                        <Line type="monotone" dataKey="Guest" stroke="#e9a0a0" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="User" stroke="#82ca9d" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
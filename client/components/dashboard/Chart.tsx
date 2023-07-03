"use client";
import { PureComponent } from "react";
import styles from "@/styles/dashboard/chart.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Obj {
    name?: string,
    User: number,
    Guest: number,
    amt?: number
};

const data1 = [
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

const data2 = [
    {
        User: 400,
        Guest: 240,
        // amt: 240,
    },
    {
        name: 'Week 1',
        User: 100,
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
        User: 100,
        Guest: 980,
        amt: 229,
    },
    {
        name: 'Week 4',
        User: 478,
        Guest: 390,
        amt: 200,
    },
    {
        User: 100,
        Guest: 240,
        // amt: 240,
    }

];

interface IState {
    selectedOption: string,
}

export default class Chart extends PureComponent<{}, IState> {
    state = { 
        selectedOption: "May - June 2021",
    };

    render() {
        return (
            <div className={styles.chart}>
                <div style={{ marginTop: 10 }}>
                    <p style={{ fontWeight: 700, marginLeft: 20 }}>Activities</p>
                    <select
                        style={
                            {
                                marginLeft: 15,
                                border: "none",
                                fontFamily: "Montserrat",
                                color: "#858585",
                                outline: "none",
                                background: "transparent"
                            }
                        }
                        value={this.state.selectedOption}
                        onChange={(e) => this.setState({selectedOption: e.target.value})}>
                        <option value="May - June 2021">May - June 2021</option>
                        <option value="June - July 2021">June - July 2021</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={180}>
                    <LineChart
                        width={200}
                        height={200}
                        data={this.state.selectedOption === "May - June 2021" ? data1: data2}
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
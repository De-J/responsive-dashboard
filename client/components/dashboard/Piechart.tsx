"use client";
import { PureComponent } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import styles from "@/styles/dashboard/piechart.module.css"

const data = [
  { name: "Custom Shorts", value: 31 },
  { name: "Basic Tees", value: 55 },
  { name: "Super Hoodie", value: 14 },
];

const COLORS = ["#F6DC7D", "#98D89E", "#EE8484"];

export default class Piechart extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div style={
          {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingLeft: 15,
            paddingRight: 15
          }}>
          <p style={{ fontWeight: 700 }}>Top Products</p>
          <select style={
            {
              border: "none",
              fontFamily: "Montserrat",
              color: "#858585",
              outline: "none",
              background: "transparent"
            }}>
            <option>May - June 2021</option>
            <option>June - July 2021</option>
          </select>
        </div>
          <PieChart width={350} height={140}>
            <Pie
              data={data}
              cx={90}
              cy={70}
              labelLine={false}
              outerRadius={55}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              align="right"
              verticalAlign="middle"
            />
          </PieChart>
      </div>
    );
  }
}
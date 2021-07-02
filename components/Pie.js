import React from 'react'
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Solar Consumed", value: 400 },
  { name: "Solar Energy", value: 300 },
  
];

const COLORS = ["#0088FE", "#00C49F"]

export default function PieComponent() {
    return (
        // <ResponsiveContainer width="100%" height="100%">
                    <PieChart
                     width={200}
                     height={250}
                    >
                      <Legend verticalAlign="top" height={14}/>
                      <Pie
                        data={data}
                        
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      
                    </PieChart>
                    // </ResponsiveContainer>
    )
}
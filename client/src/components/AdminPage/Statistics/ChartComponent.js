import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ChartComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const data = [
        { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-center space-x-4">
                <div className="w-64">
                    <label className="block mb-1" htmlFor="start-date">Start Date</label>
                    <DatePicker
                        id="start-date"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Chọn ngày bắt đầu"
                        dateFormat="eee, dd MMMM yyyy"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="w-64">
                    <label className="block mb-1" htmlFor="end-date">End Date</label>
                    <DatePicker
                        id="end-date"
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="Chọn ngày kết thúc"
                        dateFormat="eee, dd MMMM yyyy"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
            </div>
            <div className="mt-6">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ChartComponent;

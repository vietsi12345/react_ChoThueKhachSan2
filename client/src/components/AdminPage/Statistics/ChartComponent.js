import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@mui/material';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';

const ChartComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [data, setData] = useState([]);

    const jwt = localStorage.getItem('jwt');
    const dispatch = useDispatch();
    const { statistic } = useSelector(state => state.booking);

    const handleSelectDate = async () => {
        const formattedStartDate = format(startDate, 'yyyy-MM-dd');
        const formattedEndDate = format(endDate, 'yyyy-MM-dd');
        console.log('Start Date:', formattedStartDate, 'End Date:', formattedEndDate);
        dispatch(actions.getStatistic({ jwt, dateStart: formattedStartDate, dateEnd: formattedEndDate }));
    };

    useEffect(() => {
        if (statistic) {
            const formattedData = statistic.map(item => ({
                month: `Tháng ${item.month}`,
                quantity: item.quantity,
                total: item.total,
            }));
            setData(formattedData);
        }
    }, [statistic]);

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
                        dateFormat="yyyy-MM-dd"
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
                        dateFormat="yyyy-MM-dd"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="flex items-end">
                    <Button variant="contained" onClick={handleSelectDate}>
                        Thống kê
                    </Button>
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
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="quantity" fill="#8884d8" />
                        <Bar dataKey="total" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ChartComponent;

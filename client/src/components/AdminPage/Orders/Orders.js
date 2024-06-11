import React, { useState } from 'react'
import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { OrderTable } from './OrderTable'

const orderStatus = [
    { label: "Đang treo", value: "PENDING" },
    { label: "Hoàn thành", value: "COMPLETED" },
    { label: "Tất cả", value: "ALL" }
]

const Orders = () => {
    const [filterValue, setFilterValue] = useState();

    const handleFilter = (e, value) => {
        setFilterValue(value)
    }
    return (
        <div className='w-full'>
            <Card className='p-5'>

                <Typography sx={{ paddingBottom: "1rem" }} variant='h5'>
                    Trạng thái đơn hàng
                </Typography>

                <FormControl>
                    <RadioGroup onChange={handleFilter} row name='category' value={filterValue || "all"}>
                        {orderStatus.map((item) => <FormControlLabel key={item.key} value={item.value} control={<Radio />} label={item.label} sx={{ color: 'gray' }} />
                        )}
                    </RadioGroup>
                </FormControl>
            </Card>

            <OrderTable />
        </div>
    )
}

export default Orders;
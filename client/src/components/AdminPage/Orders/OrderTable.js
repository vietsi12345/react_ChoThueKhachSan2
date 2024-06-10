import { Box, Card, CardHeader, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const orders=[1,1,1,1,1,1,1]


export const OrderTable = () => {
  return (
   <Box>
        <Card className='mt-1'>
            <CardHeader title={"Tất cả đơn hàng"} sx={{pt:2,alignItems:"center"}} />

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Người lớn</TableCell>
            <TableCell align="right">Trẻ em</TableCell>
            <TableCell align="right">Mã xác nhận</TableCell>
            <TableCell align="right">Nhận phòng</TableCell>
            <TableCell align="right">Trả phòng</TableCell>
            <TableCell align="right">Email của khách</TableCell>
            <TableCell align="right">Tên của khách</TableCell>
            <TableCell align="right">ID phòng</TableCell>  
            <TableCell align="right">Tổng số khách</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{"ID 123"}</TableCell>
              <TableCell align="right">{"có"}</TableCell>
              <TableCell align="right">{"có"}</TableCell>
              <TableCell align="right">{"Mã xác nhận"}</TableCell>
              <TableCell align="right">{"Nhận phòng"}</TableCell>
              <TableCell align="right">{"Trả phòng"}</TableCell>
              <TableCell align="right">{"email khách"}</TableCell>
              <TableCell align="right">{"Tên khách"}</TableCell>
              <TableCell align="right">{"ID"}</TableCell>
              <TableCell align="right">{6}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Card>
   </Box>
  )
}

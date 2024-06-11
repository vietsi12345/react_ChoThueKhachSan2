import { Box, Button, Card, CardHeader, FormControl, FormControlLabel, Modal, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import UpdateFormRoom from './UpdateFormRoom';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteFormAdmin from './DeleteFormAdmin';

const orders=[{
  ID: "ID",
  isBooked: true,
  roomType: "type1",
  roomPrice: 10,
  photo: null
},{
  ID: "ID",
  isBooked: false,
  roomType: "type2",
  roomPrice: 20,
  photo: null
}]

const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


export const RoomTable = () => {
    const [openData, setOpenData] = React.useState({
      openStatus: false,
      deleteStatus: false,
      data: null
    });

    function handleOpen(row){
      setOpenData({openStatus: true,deleteStatus: false, data: row})
    }
  const handleClose = () => {
    setOpenData({openStatus: false,deleteStatus: false, data: null})
  }

  function handleDelete(row){
    setOpenData({openStatus: false,deleteStatus: true, data: row})
  }

    

  return (
   <Box>
        <Card className='mt-1'>
            <CardHeader title={"Phòng theo khách sạn"} sx={{pt:2,alignItems:"center"}} />

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Đã được đặt</TableCell>
            <TableCell align="right">Ảnh</TableCell>
            <TableCell align="right">Giá tiền</TableCell>
            <TableCell align="right">Loại phòng</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.ID}</TableCell>
              {row.isBooked && <TableCell align="right">{"Đã đc đặt"}</TableCell>}
              {!row.isBooked && <TableCell align="right">{"Chưa đc đặt"}</TableCell>}
              <TableCell align="right">{row.photo}</TableCell>
              <TableCell align="right">{row.roomPrice}</TableCell>
              <TableCell align="right">{row.roomType}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleOpen(row)}><EditIcon /></Button>
                    <Modal
                        open={openData.openStatus}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        {openData.openStatus && <UpdateFormRoom formValue = {openData.data} /> }
                        </Box>
                    </Modal>

                    <Button onClick={() => handleDelete(row)}><DeleteIcon /></Button>
                    <Modal
                        open={openData.deleteStatus}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                          {openData.deleteStatus && <DeleteFormAdmin formValue = {openData.data} /> }
                        </Box>

                    </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Card>

        
   </Box>
  )
}

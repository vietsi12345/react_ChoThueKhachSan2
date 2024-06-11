import { Box, Button, Card, FormControl, FormControlLabel, InputLabel, MenuItem, Modal, Radio, RadioGroup, Select, Typography } from '@mui/material';
import React, { useState } from 'react'
import { RoomTable } from './RoomTable';
import AddIcon from '@mui/icons-material/Add';
import CreateRoomCategoryForm from './CreateRoomCategoryForm';


const orderStatus = [
  {label: "Đang treo", value:"PENDING"},
  {label: "Hoàn thành", value: "COMPLETED"},
  {label:"Tất cả", value: "ALL"}
]

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


export const RoomAdmin = () => {
  const[filterValue, setFilterValue] = useState();

  const handleFilter=(e,value) =>{
      setFilterValue(value)
  }

  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return (
      <div className='px-2'>
          <Card className='p-5'>

          <Typography sx={{paddingBottom: "1rem"}} variant='h5'>
              Danh sách phòng
          </Typography>
          <div >
            <Box sx={{ minWidth: 120 }} className='flex justify-between'>
              <FormControl className='w-1/3'>
                <InputLabel id="demo-simple-select-label">Khách sạn</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>KS 1</MenuItem>
                  <MenuItem value={20}>KS 2</MenuItem>
                  <MenuItem value={30}>Ks 3</MenuItem>
                </Select>
              </FormControl>

              <Button onClick={handleOpen}><AddIcon sx={{ fontSize: 40 }} /></Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <CreateRoomCategoryForm formValue = {null} /> 
                        </Box>
                    </Modal>
            </Box>
          </div>
          </Card>

          <RoomTable/>
      </div>
      )
}

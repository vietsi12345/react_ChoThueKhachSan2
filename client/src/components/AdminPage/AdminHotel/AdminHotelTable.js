import { Avatar, Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import DiscountIcon from '@mui/icons-material/Discount';
import { CreateHotel } from './CreateHotel';
import { UpdateHotel } from './UpdateHotel';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions'
import { formatMonneyVietNam } from '../../../ultils/common/formatMonneyVietNam';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const AdminHotelTable = () => {
    const { homes } = useSelector(state => state.home)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [modalContent, setModalContent] = useState('')
    const [updateValues, setUpdateValues] = useState({
        name: '',
        city: '',
        address: '',
        description: '',
        price: '',
        photo: null
    });

    const handleOpen = (content, data) => {
        setModalContent(content);
        setUpdateValues(data); // Truyền dữ liệu vào state updateValues
        setOpen(true);
        // console.log(updateValues)
    };

    const handleClose = () => {
        setModalContent('');
        setOpen(false);
    };

    const handleDeleteHotel = (idHotel) => {
        dispatch(actions.deleteHotel(idHotel))
        alert(`{Xóa khách sạn có id là: ${idHotel} thành công}`)
    }

    useEffect(() => {
        dispatch(actions.getAllHome());
    }, []);

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton onClick={() => handleOpen('create')} aria-label="settings">
                        <CreateIcon />
                    </IconButton>
                } title={"Menu"} sx={{ pt: 2, alignItems: "center" }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Ảnh</TableCell>
                                <TableCell align="center">Tên Khách sạn</TableCell>
                                <TableCell align="center">Địa chỉ</TableCell>
                                {/* <TableCell align="center">Mô tả</TableCell> */}
                                <TableCell align="center">Giá tiền</TableCell>
                                <TableCell align="center">Đánh giá</TableCell>
                                <TableCell align="center">Xoá</TableCell>
                                <TableCell align="center">Sửa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {homes.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{item?.id}</TableCell>
                                    <TableCell align="center">
                                        <img src={`data:image/png;base64,${item?.photo}`}
                                            className='w-[80px] h-[60px] rounded-md object-cover'
                                        />
                                    </TableCell>
                                    <TableCell align="center">{item?.name}</TableCell>
                                    <TableCell align="center">
                                        {item?.address}
                                    </TableCell>
                                    {/* <TableCell align="center">{'Mô tả'}</TableCell> */}
                                    <TableCell align="center">{formatMonneyVietNam(item?.price)}</TableCell>
                                    <TableCell align="center">
                                        {`${item.rating} sao`}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => handleDeleteHotel(item?.id)}><DeleteIcon /></IconButton>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => handleOpen('update', item)}>
                                            <DiscountIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {modalContent === 'create' ? <CreateHotel /> : <UpdateHotel updateValues={updateValues} />}
                </Box>
            </Modal>
        </Box>
    )
}

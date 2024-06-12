import { Box, Button, Card, CardHeader, Menu, MenuItem, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import { formatMonneyVietNam } from '../../../ultils/common/formatMonneyVietNam';
import OrderDetailAdmin from './OrderDetailAdmin';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 750,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const orderStatus = [
  { label: "Đã thanh toán", value: "Đã thanh toán" },
  { label: "Chưa thanh toán", value: "Chưa thanh toán" },
  { label: "Đã hủy", value: "Đã hủy" },
];

export const OrderTable = () => {
  const dispatch = useDispatch();
  const { allBooking } = useSelector(state => state.booking);
  const [order, setOrder] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = (order) => {
    setOrder(order);
    setOpen(true);
  };
  const handleClose = () => {
    setOrder({});
    setOpen(false);
  };

  useEffect(() => {
    dispatch(actions.getAllBookings());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentOrderId, setCurrentOrderId] = useState(null);

  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setCurrentOrderId(orderId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentOrderId(null);
  };

  const jwt = localStorage.getItem('jwt')

  const handleUpdateOrderStatus = (orderId, orderStatus) => {
    console.log(orderId)
    dispatch(actions.updateBookingStatus({ jwt, status: orderStatus, idBooking: orderId }))
    console.log(orderStatus);
    handleMenuClose();
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Card className='mt-1'>
        <CardHeader title={"Tất cả đơn hàng"} sx={{ pt: 2, alignItems: "center" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ minWidth: 50, padding: '8px 16px' }}>ID</TableCell>
                <TableCell align="center" sx={{ minWidth: 120, padding: '8px 16px' }}>Nhận phòng</TableCell>
                <TableCell align="center" sx={{ minWidth: 120, padding: '8px 16px' }}>Trả phòng</TableCell>
                <TableCell align="center" sx={{ minWidth: 100, padding: '8px 16px' }}>Email</TableCell>
                <TableCell align="center" sx={{ minWidth: 120, padding: '8px 16px' }}>Họ tên</TableCell>
                <TableCell align="center" sx={{ minWidth: 100, padding: '8px 16px' }}>Giá</TableCell>
                <TableCell align="center" sx={{ minWidth: 100, padding: '8px 16px' }}>Trạng thái</TableCell>
                <TableCell align="center" sx={{ minWidth: 80, padding: '8px 16px' }}></TableCell>
                <TableCell align="center" sx={{ minWidth: 80, padding: '8px 16px' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allBooking?.map((item, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" align="center">{item.bookingId}</TableCell>
                  <TableCell align="center">{item.checkInDate}</TableCell>
                  <TableCell align="center">{item.checkOutDate}</TableCell>
                  <TableCell align="center">{item.guestEmail}</TableCell>
                  <TableCell align="center">{item.guestFullName}</TableCell>
                  <TableCell align="center">{formatMonneyVietNam(item?.totalPrice)}</TableCell>
                  <TableCell align="center">{item.bookingStatus}</TableCell>
                  <TableCell align="center">
                    <Button
                      id="basic-button"
                      aria-controls={anchorEl && currentOrderId === item.bookingId ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorEl && currentOrderId === item.bookingId ? 'true' : undefined}
                      onClick={(event) => handleClick(event, item.bookingId)}
                    >
                      Cập nhật
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl && currentOrderId === item.bookingId)}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      {orderStatus.map((status, index) => (
                        <MenuItem key={index} onClick={() => handleUpdateOrderStatus(item.bookingId, status.value)}>{status.label}</MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant='outlined' onClick={(() => handleOpen(item))}>Chi tiết</Button>
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
          <OrderDetailAdmin item={order} />
        </Box>
      </Modal>
    </Box>
  );
};

import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
};

export const CreateHotel = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        address: "",
        city: "",
        description: "",
        price: "",
        image: null,
        imagePreview: null
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.name && formValues.address && formValues.city && formValues.description && formValues.price && formValues.image) {
            const formData = new FormData();
            formData.append("name", formValues.name);
            formData.append("address", formValues.address);
            formData.append("city", formValues.city);
            formData.append("description", formValues.description);
            formData.append("price", formValues.price);
            formData.append("photo", formValues.image);

            // Xử lý logic gửi form ở đây
            console.log(formData);
            dispatch(actions.createHotel(formData))
            alert("Thêm khách sạn thành công");
        } else {
            alert("Vui lòng điền đầy đủ thông tin");
        }
    };

    const handleFormChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormValues({
            ...formValues,
            image: file,
            imagePreview: URL.createObjectURL(file)
        });
    };

    return (
        <Box sx={style}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            name='name'
                            label="Tên khách sạn"
                            variant='outlined'
                            fullWidth
                            value={formValues.name}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='address'
                            label="Địa chỉ"
                            variant='outlined'
                            fullWidth
                            value={formValues.address}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='city'
                            label="Thành phố"
                            variant='outlined'
                            fullWidth
                            value={formValues.city}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='description'
                            label="Mô tả"
                            variant='outlined'
                            fullWidth
                            value={formValues.description}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='price'
                            label="Giá"
                            variant='outlined'
                            fullWidth
                            value={formValues.price}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {formValues.imagePreview && (
                            <Box mt={2} textAlign="center">
                                <Typography variant="subtitle1">Xem trước hình ảnh:</Typography>
                                <img
                                    src={formValues.imagePreview}
                                    alt="Hotel Preview"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '300px',
                                        marginTop: '10px'
                                    }}
                                />
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant='contained' fullWidth>Tạo khách sạn</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

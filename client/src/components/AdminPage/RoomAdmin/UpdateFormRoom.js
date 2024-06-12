import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions'


function UpdateFormRoom({ formValue }) {
    const [uploadImage, setUploadImage] = useState(false);
    const dispatch = useDispatch();


    console.log(formValue.id)
    const [formData, setFormData] = useState({
        roomType: formValue.roomType,
        roomPrice: formValue.roomPrice,
        photo: formValue.photo,
        imagePreview: formValue.photo
    });

    console.log(formData)


    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataSend = new FormData();
        formDataSend.append("roomType", formData.roomType);
        formDataSend.append("roomPrice", formData.roomPrice);
        formDataSend.append("photo", formData.photo);

        dispatch(actions.updateRoom({ formData: formDataSend, idRoom: formValue.id }))
        alert("Cập nhật phòng thành công");

    }
    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({
                ...formData,
                photo: file,
                imagePreview: reader.result
            });
        };
        reader.readAsDataURL(file);
    };


    return (
        <div>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Sửa Phòng</h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField fullWidth onChange={handleFormChange} id="roomPrice" name="roomPrice" label="Giá tiền" variant='outlined' value={formData.roomPrice} />
                    <TextField fullWidth onChange={handleFormChange} id="roomType" name="roomType" label="Loại phòng" variant='outlined' value={formData.roomType} />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    {formData.imagePreview && (
                        <Box mt={2} textAlign="center">
                            <Typography variant="subtitle1">Xem trước hình ảnh:</Typography>
                            <img
                                src={formData.imagePreview}
                                alt="Hotel Preview"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '300px',
                                    marginTop: '10px'
                                }}
                            />
                        </Box>
                    )}

                    <Button variant='contained' type='submit '> Sửa Phòng</Button>
                </form>

            </div>
        </div>
    )
}

export default UpdateFormRoom;
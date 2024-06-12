import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions'


function CreateRoomCategoryForm({ idHotel }) {
    console.log(idHotel)
    const [uploadImage, setUploadImage] = useState(false);
    const dispatch = useDispatch();



    const [formData, setFormData] = useState({
        roomType: "",
        roomPrice: 0,
        photo: null
    });

    // if (formValue != null) {
    //     setFormData({
    //         roomType: formValue.roomType,
    //         roomPrice: formValue.roomPrice,
    //         photo: formValue.photo
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.roomPrice && formData.roomType && formData.photo && idHotel) {
            const formDataSend = new FormData();
            formDataSend.append("roomType", formData.roomType);
            formDataSend.append("roomPrice", formData.roomPrice);
            formDataSend.append("photo", formData.photo);
            formDataSend.append("hotelId", idHotel);

            dispatch(actions.createRoom(formDataSend))
            alert("Tạo phòng thành công");
        } else {
            alert("Vui lòng điền đầy đủ thông tin");
        }
    }
    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setFormData({
            ...formData,
            photo: file,
            imagePreview: URL.createObjectURL(file)
        });
    };

    return (
        <div>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Tạo Phòng</h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField fullWidth onChange={handleFormChange} id="roomPrice" name="roomPrice" label="Giá tiền" variant='outlined' value={FormData.roomPrice} />
                    <TextField fullWidth onChange={handleFormChange} id="roomType" name="roomType" label="Loại phòng" variant='outlined' value={FormData.roomType} />
                    <input type="file" name='photo' accept="image/*" onChange={handleFileChange} />
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

                    <Button variant='contained' type='submit '> Tạo phòng</Button>
                </form>

            </div>
        </div>
    )
}

export default CreateRoomCategoryForm;
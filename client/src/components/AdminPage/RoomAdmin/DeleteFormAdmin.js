import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';


function DeleteFormAdmin({formValue}) {
    const [uploadImage, setUploadImage] = useState(false);
    const dispatch =useDispatch();

    const [formData, setFormData] = useState({
        roomType: formValue.roomType,
        roomPrice: formValue.roomPrice,
        photo: formValue.photo
    });
    


    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            roomType: formData.roomType,
            roomPrice: formData.roomPrice,
            photo: formData.photo
        }
        if(formData.roomPrice && formData.roomType && formData.photo){
            console.log(data)
            alert("Ok đủ thông tin");
        } else{
            console.log(data)
            alert("Vui lòng điền đầy đủ thông tin");
        }
    }
    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData, [name]:value
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
         <div className='p-5'><center> 
            <h1 className='text-gray-400 text-center text-xl pb-10'>Xoá Phòng</h1>
            <h2 className='text-red-600 mb-px' style={{marginBottom: "10px"}}>Bạn có chắc chắn xoá phòng</h2>
               <Button variant='contained' className='mt-px' type='submit '> Xoá phòng</Button></center>
            

        </div>
    </div>
  )
}

export  default DeleteFormAdmin;
import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions'

function DeleteFormAdmin({ formValue }) {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(actions.deleteRoom(formValue.id))
    }
    return (
        <div>
            <div className='p-5'><center>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Xoá Phòng</h1>
                <h2 className='text-red-600 mb-px' style={{ marginBottom: "10px" }}>Bạn có chắc chắn xoá phòng</h2>
                <Button onClick={handleDelete} variant='contained' className='mt-px' type='submit '> Xoá phòng</Button></center>
            </div>
        </div>
    )
}

export default DeleteFormAdmin;
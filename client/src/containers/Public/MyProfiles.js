import { Box, Modal } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

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


const MyProfiles = () => {
    const { user } = useSelector(state => state.auth)
    const [name, setName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [role, setRole] = useState(user.role)
    const [newPassword, setNewPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdatePassword = () => {
        let hasErr = false
        if (newPassword.length < 8) {
            setErrorPassword('Mật khẩu phải dài hơn 8 kí tự!!')
            hasErr = true
        } else setErrorPassword('')
        if (!hasErr) {

        }
    }

    return (
        <div className='flex flex-col p-5 gap-5'>
            <h1 className='text-2xl font-bold'>Tài khoản</h1>
            <div className='border border-gray-200 rounded-xl bg-white px-5 pb-5 '>
                <div className='mt-5 flex flex-col gap-2'>
                    <span className='text-gray-500'>Tên đầy đủ</span>
                    <input
                        type='email'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <div className='mt-3 flex flex-col gap-2'>
                    <span className='text-gray-500'>Email</span>
                    <input
                        type='email'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <div className='mt-3 flex flex-col gap-2'>
                    <span className='text-gray-500'>Quyền</span>
                    <input
                        type='email'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <button className='bg-blue-600 rounded-md text-white font-semibold text-xl p-1 px-4 mt-3 hover:bg-blue-400'
                    onClick={handleOpen}
                >
                    Đổi mật khẩu
                </button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='mt-3 flex flex-col gap-2'>
                        <span className='text-gray-500'>Nhập mật khẩu mới</span>
                        <input
                            type='email'
                            className="outline-none  p-2 rounded-md w-full border border-gray-400"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {errorPassword && <div className='text-red-500 text-sm'>{errorPassword}</div>}
                    </div>
                    <button
                        className='bg-blue-600 rounded-md text-white font-semibold text-xl p-1 px-4 mt-3 hover:bg-blue-400'
                        onClick={handleUpdatePassword}
                    >
                        Xác nhận
                    </button>
                </Box>
            </Modal>
        </div>
    )
}

export default MyProfiles

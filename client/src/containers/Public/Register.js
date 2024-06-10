import React, { useEffect, useState } from 'react'
import { GiPodiumSecond } from 'react-icons/gi';
import { path } from '../../ultils/constain'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [testPassWord, setTestPassWord] = useState('')
    const [errorPassWord, setErrorPassWord] = useState('');
    const [errorEmail, seterrorEmail] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorSurName, setErrorSurName] = useState('')
    const [errorTestPassword, setErrorTestPassword] = useState('')

    const handleSubmit = () => {
        if (!name) {
            setErrorName('Vui lòng điền đầy đủ thông tin tên')
        } else setErrorName('')

        if (!surname) {
            setErrorSurName('Vui lòng điền đầy đủ thông tin họ')
        } else setErrorSurName('')

        if (!email) {
            seterrorEmail('Vui lòng điền đầy đủ thông tin email')
        } else seterrorEmail('')


        if (!password) {
            setErrorPassWord('Vui lòng điền đầy đủ thông tin mật khẩu')
        } else if (password.length <= 8) {
            setErrorPassWord('Mật khẩu phải đủ tối thiểu 8 kí tự')
        } else setErrorPassWord('')

        if (!testPassWord) {
            setErrorTestPassword('Vui lòng điền đầy đủ thông tin mật khẩu')
        } else if (testPassWord.length <= 8) {
            setErrorTestPassword('Mật khẩu phải đủ tối thiểu 8 kí tự')
        } else setErrorTestPassword('')

    };

    const goLogin = () => {
        navigate('/login');
    };


    return (
        <div className='w-[500px] bg-white shadow-lg mt-10 mb-8 p-7 px-5'>
            <h3 className='text-2xl font-semibold'>Đăng ký</h3>
            <h6 className='pt-2'>Để đăng nhập vào hệ thống, xin vui lòng đăng ký nếu chưa có tài khoản</h6>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Tên</span>
                <input
                    type='name'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={email}
                    onChange={(e) => setName(e.target.value)}
                />
                {errorName && <div className='text-red-500 text-sm'>{errorName}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Họ</span>
                <input
                    type='surname'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={email}
                    onChange={(e) => setSurname(e.target.value)}
                />
                {errorSurName && <div className='text-red-500 text-sm'>{errorSurName}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Email</span>
                <input
                    type='email'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Mật khẩu</span>
                <input
                    type='password'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorPassWord && <div className='text-red-500 text-sm'>{errorPassWord}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Xác nhận mật khẩu</span>
                <input
                    type='password'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={password}
                    onChange={(e) => setTestPassWord(e.target.value)}
                />
                {errorTestPassword && <div className='text-red-500 text-sm'>{errorTestPassword}</div>}
            </div>
            <button
                onClick={handleSubmit}
                className='bg-[#5392f9] text-white p-2 mt-7 shadow-md rounded-md w-full hover:bg-blue-300'
            >
                Đăng ký
            </button>
            <button
                onClick={goLogin}
                className='bg-[#5392f9] text-white p-2 mt-7 shadow-md rounded-md w-full hover:bg-blue-300 mb-4'
            >
                Bạn đã có tài khoản? Đăng nhập
            </button>
            <div className='flex justify-center'>
                <span className='text-black cursor-pointer text-center'>
                    Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của hệ thống.
                </span>
            </div>
        </div>
    );
};

export default Register

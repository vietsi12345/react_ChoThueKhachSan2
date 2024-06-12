import React, { useEffect, useState } from 'react'
import { GiPodiumSecond } from 'react-icons/gi';
import { path } from '../../ultils/constain'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'


const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispath = useDispatch()

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [testPassWord, setTestPassWord] = useState('')
    const [errorPassWord, setErrorPassWord] = useState('');
    const [errorEmail, seterrorEmail] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorTestPassword, setErrorTestPassword] = useState('')

    const [selectedGender, setSelectedGender] = useState("ROLE_ADMIN");

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

    const handleSubmit = () => {
        let hasError = false;

        if (!name) {
            setErrorName('Vui lòng điền đầy đủ thông tin tên')
            hasError = true;
        } else setErrorName('')

        if (!email) {
            seterrorEmail('Vui lòng điền đầy đủ thông tin email')
            hasError = true;
        } else seterrorEmail('')

        if (!password) {
            setErrorPassWord('Vui lòng điền đầy đủ thông tin mật khẩu')
            hasError = true;
        } else if (password.length < 8) {
            setErrorPassWord('Mật khẩu phải đủ tối thiểu 8 kí tự')
            hasError = true;
        } else setErrorPassWord('')

        if (!testPassWord) {
            setErrorTestPassword('Vui lòng điền đầy đủ thông tin mật khẩu')
            hasError = true;
        } else if (testPassWord.length < 8) {
            setErrorTestPassword('Mật khẩu phải đủ tối thiểu 8 kí tự')
            hasError = true;
        } else if (password !== testPassWord) {
            setErrorTestPassword('Mật khẩu nhập lại không khớp')
            hasError = true;
        } else setErrorTestPassword('')

        if (!hasError) {
            const data = {
                fullName: name,
                email: email,
                password: password,
                role: selectedGender
            }
            console.log(data)
            dispath(actions.signUp({ data, navigate }))
        }
    };
    const goLogin = () => {
        navigate('/login');
    };


    return (
        <div className='w-[500px] bg-white shadow-lg mt-10 mb-8 p-7 px-5'>
            <h3 className='text-2xl font-semibold'>Đăng ký</h3>
            <h6 className='pt-2'>Để đăng nhập vào hệ thống, xin vui lòng đăng ký nếu chưa có tài khoản</h6>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Họ và tên</span>
                <input
                    type='name'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errorName && <div className='text-red-500 text-sm'>{errorName}</div>}
            </div>
            <div className='mt-3 flex flex-col gap-2'>
                <span className='text-gray-500'>Quyền</span>
                <div className="relative">
                    <select
                        id="gender"
                        name="gender"
                        value={selectedGender}
                        onChange={handleGenderChange}
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                    >

                        <option value="ROLE_ADMIN">Admin</option>
                        <option value="ROLE_CUSTOMER">Khách hàng</option>
                    </select>
                </div>
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
                    value={testPassWord}
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

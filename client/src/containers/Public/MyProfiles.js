import React, { useState } from 'react'

const MyProfiles = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [day, setDay] = useState('')
    const [phone, setPhone] = useState('')
    const [selectedGender, setSelectedGender] = useState("");

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

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
                    <span className='text-gray-500'>Giới tính</span>
                    <div className="relative">
                        <select
                            id="gender"
                            name="gender"
                            value={selectedGender}
                            onChange={handleGenderChange}
                            className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        >

                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>
                </div>
                <div className='mt-3 flex flex-col gap-2'>
                    <span className='text-gray-500'>Ngày sinh</span>
                    <input
                        type='email'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <div className='mt-3 flex flex-col gap-2'>
                    <span className='text-gray-500'>Số điện thoại</span>
                    <input
                        type='email'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <button className='bg-blue-600 rounded-md text-white font-semibold text-xl p-1 px-4 mt-3 hover:bg-blue-400'>Lưu thông tin</button>
            </div>
        </div>
    )
}

export default MyProfiles

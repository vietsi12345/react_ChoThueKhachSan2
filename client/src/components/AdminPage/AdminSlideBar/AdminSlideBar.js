import React from 'react'
import { AdminPanelSettings, Category, Dashboard, Fastfood, ShoppingBag } from '@mui/icons-material'
import ShopTwoIcon from '@mui/icons-material/ShopTwo'
import Event from '@mui/icons-material/Event'
import Logout from '@mui/icons-material/Logout'
import { Divider, Drawer, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AddHomeIcon from '@mui/icons-material/AddHome';

const menu = [
    { title: "Quản lý khách hàng", icon: <Dashboard />, path: "/customers" },
    { title: "Quản lý đơn hàng", icon: <ShoppingBag />, path: "/orders" },
    { title: "Quản lý phòng", icon: <ShopTwoIcon />, path: "/rooms" },
    { title: "Quản lý tài khoản cá nhân", icon: <Category />, path: "/myaccount" },
    { title: "Quản lý khách sạn", icon: <AddHomeIcon />, path: "/hotels" },
    { title: "Thống kê doanh thu", icon: <EqualizerIcon />, path: "/statistics" },
    { title: "Đăng xuất", icon: <Logout />, path: "/logout" }
]
const AdminSlideBar = ({ handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleNavigate = (item) => {
        navigate(`/admin${item.path}`)
        if (item.title === "Đăng xuất") {
            navigate(`/`)
            handleClose()
        }
    }
    return (
        <div>
            <>
                <Drawer variant={isSmallScreen ? "temporary" : "permanent"} onClose={handleClose} anchor='left' open="true" sx={{ zIndex: 1 }}>
                    <div className='w-[70] lg:w-[20] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>
                        {menu.map((item, i) => <>
                            <div key={i} onClick={() => handleNavigate(item)} className='px-5 flex items-center gap-5 cursor-pointer'>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {i !== menu.length - 1 && <Divider />}
                        </>)}
                    </div>
                </Drawer>
            </>
        </div>
    )
}


export default AdminSlideBar
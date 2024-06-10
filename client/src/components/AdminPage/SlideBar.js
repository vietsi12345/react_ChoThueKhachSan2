import React from 'react';
// import images from '~/asset/images';

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    });
}

function SlideBar() {
    return (
        <div className='Slide-Bar'>
            <div className="wrapper d-flex align-items-stretch "></div>
            <nav id="sidebar" className="" style={{ position: 'fixed', height: '100vh', overflowY: 'scroll' }}>
            <img src = "https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="logo" />
                <div className="p-4 pt-3">
                    <div className="home-btn-slide-bar-admin">
                        <a href="#">Trang Quản Lý</a>
                    </div>
                    <ul className="list-unstyled components mb-5">
                        <li className=" qltk" style={{ background: '#1d1919' }}>
                            <a
                                href="#homeSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                className="dropdown-toggle cursorr qltk"
                            >
                                Quản lý tài khoản
                            </a>

                            <ul className="collapse list-unstyled tab-slide-admin" id="homeSubmenu">
                                <li className="qltk1">
                                    <a href="#" className="cursorr ">
                                        Tài khoản của tôi
                                    </a>
                                </li>

                                <li className="qltk2">
                                    <a href="#" className="cursorr ">
                                        Tài khoản nhân viên
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="qltk3">
                            <a href="#" className="cursorr ">
                                Quản lý Khách hàng
                            </a>
                        </li>
                        <li className="qldh">
                            <a
                                href="#pageSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                className="dropdown-toggle cursorr"
                            >
                                Quản lý đơn hàng
                            </a>

                            <ul className="collapse list-unstyled tab-slide-admin" id="pageSubmenu">
                                <li className="qldh1">
                                    <a href="#" className="cursorr ">
                                        Phiếu đặt/ Hoá đơn
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="qlsp">
                            <a className="accordion cursorr" style={{ background: '#1d1919', padding: '10px 0px' }}>
                                Quản lý sản phẩm
                                <i className="fa-solid fa-caret-down fa-xs"></i>
                            </a>

                            <div className="panel" style={{ background: '#1d1919', padding: '0px' }}>
                                <ul style={{ listStyle: 'none' }}>
                                    <li className="qlsp1">
                                        <a href="#" className="cursorr">
                                            Sản phẩm
                                        </a>
                                    </li>

                                    <li className="qlsp2">
                                        <a href="#" className="cursorr">
                                            Loại sản phẩm
                                        </a>
                                    </li>
                                    <li className="qlsp3">
                                        <a href="#" className="cursorr">
                                            Nhà cung cấp
                                        </a>
                                    </li>
                                    <li className="qlsp4">
                                        <a href="#" className="cursorr">
                                            Phiếu nhập
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="tkdt">
                            <a className="accordion cursorr" style={{ background: '#1d1919', padding: '10px 0px' }}>
                                Thống kê Doanh thu
                                <i className="fa-solid fa-caret-down fa-xs"></i>
                            </a>

                            <div className="panel" style={{ background: '#1d1919', padding: '0px' }}>
                                <ul style={{ listStyle: 'none' }}>
                                    <li className="tkdt1">
                                        <a href="#" className="cursorr">
                                            Theo thời gian
                                        </a>
                                    </li>
                                    <li className="tkdt2">
                                        <a href="#" className="cursorr">
                                            Theo sản phẩm
                                        </a>
                                    </li>
                                    <li className="tkdt3">
                                        <a href="#" className="cursorr">
                                            Theo loại sản phẩm
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <ul className="list-unstyled components mb-5">
                            <li>
                                <a href="#" className="cursorr">
                                    Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </ul>

                    <div className="footer"></div>
                </div>
            </nav>
        </div>
    );
}

export default SlideBar;

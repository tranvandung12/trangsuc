/* eslint-disable no-unused-vars */
import React from 'react';
function Footer() {

    return (

      <div className='flex justify-center ' >
          <div className="flex justify-center h-96 position: absolute mt-6">
            <img
                src="https://bizweb.dktcdn.net/100/260/640/themes/801977/assets/footer-bg.jpg?1676017321988
            "
                alt=""
                className=" brightness-50  "  style={{width:"1700px"}}
            />
            </div>
            <div className=" flex justify-cente r  gap-28  position: absolute mt-24 text-white   " >
                <div className="flex-col md:flex-col">
                    <span className=''>
                    <h1 className="flex-col text-lg antialiased">Về Cửa Hàng</h1>
                    <h1 className="mt-4 text-sm">
                        Trang sức Hoàng gia - Chuyên cung cấp trang sức 
                    </h1>
                    <h1> trọng toàn quốc</h1>

                    </span>
                   

                    <span className="flex  gap-3 text-sm mt-6 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                        tranvandung@shop.vn
                    </span>
                    <span className="flex gap-3 mt-4 text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                        </svg>
                        0586044319
                    </span>
                    <span className="flex mt-4 gap-3 text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                        </svg>
                        240 xô viết nghệ tĩnh Đà Nẵng
                    </span>
                </div>
                <div className="  ">
                    <h1 className="text-lg antialiased">Thông Tin </h1>
                    <h1 className="mt-3 text-sm">Trang chủ</h1>
                    <h1 className="mt-3 text-sm">Sản Phẩm</h1>
                    <h1 className="mt-3 text-sm">Giới Thiệu</h1>
                    <h1 className="mt-3 text-sm">Tin Tức</h1>
                    <h1 className="mt-3 text-sm">Liên Hệ</h1>
                    <h1 className="mt-3 text-sm">Đại Lý</h1>
                </div>
                <div className="">
                    <h1 className="text-lg antialiased">Liên Kết </h1>
                    <h1 className="mt-3 text-sm">Trang chủ</h1>
                    <h1 className="mt-3 text-sm">Sản Phẩm</h1>
                    <h1 className="mt-3 text-sm">Giới Thiệu</h1>
                    <h1 className="mt-3 text-sm">Tin Tức</h1>
                    <h1 className="mt-3 text-sm">Liên Hệ</h1>
                    <h1 className="mt-3 text-sm">Đại Lý</h1>
                </div>
                <div className="  ">
                    <h1 className="text-lg antialiased">Theo Dõi</h1>
                    <h1 className="mt-3 text-sm">
                        Đăng ký nhận email để nhận thông tin khuyến mãi mới <p>nhất</p>
                    </h1>
                    <h1 className="mt-3 text-sm">
                        Đăng ký nhận email để nhận thông tin khuyến mãi mới <p>nhất</p>
                    </h1>
                    <form className="mt-4 ">
                    <span >email</span>
                        <label className="block">
                         
                            <input type="email" className="peer text-black  ..." />
                           
                        
                            <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                                Please provide a valid email address.
                                
                            </p>
                            
                        </label>
                        
                    </form>
                  
                </div>
            </div>
        
      </div>
    );
}

export default Footer;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from '@nextui-org/react';
import React from 'react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Contact() {
    return (
        <div>
            <spanbody className="flex justify-center gap-6">
                <span>
                    <h1>Gửi tin nhắn cho chúng tôi</h1>
                    <div>
                        <span>
                            <input
                                placeholder="họ tên*"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 mt-5 "
                                id="username"
                                type="text"
                                style={{ width: '500px' }}
                            />
                        </span>

                        <span>
                            <label className="block">
                                <input
                                    name="email"
                                    className="mt-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Email"
                                />
                            </label>
                        </span>

                        <span>
                            <input
                                placeholder="số điện thoại*"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 mt-5"
                                id="username"
                                type="số điện thoại"
                                style={{ width: '500px' }}
                            />
                        </span>
                        <span>
                            <input
                                placeholder="nhập nội dung*"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 mt-5"
                                style={{ width: '500px', height: '150px' }}
                            />
                        </span>
                        <Button className="bg-red-600 mt-3" radius="none">
                            gửi liên hệ
                        </Button>
                    </div>
                </span>
                <div>
                    <span className=" flex gap-1 mt-14">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6  "
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
                        </span>
                        <spancontac className="flex-col">
                            <h1> địa chỉ liên hệ</h1>
                            <h1 className="">Ladeco Building, 266 Doi Can Street, Hà Nội,</h1>
                        </spancontac>
                    </span>
                    <span className=" flex gap-1 mt-6">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                        </span>
                        <spancontac className="flex-col">
                            <h1>số điện thoại</h1>
                            <h1 className="text-red-500 mt-2">19006750</h1>
                            <h1 className="mt-1">Thứ 2 - Chủ nhật: 9:00 - 18:00</h1>
                        </spancontac>
                    </span>
                    <span className=" flex gap-1 mt-6">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                                />
                            </svg>
                        </span>
                        <spancontac className="flex-col">
                            <h1>Email</h1>
                            <h1 className="text-red-500 mt-2">dungsupport@sapo.vn</h1>
                        </spancontac>
                    </span>
                </div>
            </spanbody>
           <div className='flex justify-center mt-7'>
           <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245368.20484126982!2d108.07812645!3d16.071809050000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmc!5e0!3m2!1svi!2s!4v1706695328418!5m2!1svi!2s"
                style={{ width: '900px', height: '600px' }}
            ></iframe>
           </div>
     
        </div>
    );
}

export default Contact;

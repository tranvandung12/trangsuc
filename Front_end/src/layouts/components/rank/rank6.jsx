import { Image } from '@nextui-org/react';
import React from 'react';

export default function Rank6() {
    const [showModal, setShowModal] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const [showModal4, setShowModal4] = React.useState(false);
    return (
        <div className="w-full h-full flex justify-center gap-6 mt-11 ">
            <div className="flex justify-center ">
                <Image
                    onClick={() => setShowModal(true)}
                    radius="none"
                    isZoomed
                    width={240}
                    src="/src/assets/rank6/vongtinhnhan.jpg"
                    alt=" "
                    className="w-60 h-60 drop-shadow-2xl    "
                />
                <>
                    {showModal ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Vòng tay tình nhân
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex justify-center gap-3">
                                            <span>
                                                <img
                                                    src="/src/assets/rank6/vongtinhnhan.jpg"
                                                    alt=""
                                                    style={{
                                                        width: '250px',
                                                        height: '250px',
                                                    }}
                                                />
                                            </span>

                                            <span>
                                                <h1>
                                                    Mã SP: Chưa cập nhật | Thương hiệu: Văn Dũng
                                                </h1>
                                                <h1 className="text-red-500 text-xl font-semibold">
                                                    999.999₫{' '}
                                                </h1>
                                                <h1 style={{ width: '450px' }}>
                                                    Sterling silver (hợp kim bạc 925) là loại hợp
                                                    kim sáng nhất. Bạc tinh khiết quá mềm để làm đồ
                                                    trang sức, vì vậy người ta thường pha hợp kim
                                                    đồng hoặc các kim loại khác để làm cho nó đủ
                                                    cứng và dễ tạo độ bóng. Trong những năm gần đây,
                                                    việc pha kim loại khác còn nhằm tác...
                                                </h1>
                                            </span>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Thêm Vào Giỏ Hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </>
            </div>
            <div>
                <Image
                    onClick={() => setShowModal2(true)}
                    radius="none"
                    isZoomed
                    width={240}
                    src="/src/assets/rank6/bongtaiphacach.jpg"
                    alt=""
                    className="w-60 h-60 drop-shadow-2xl"
                />
                <>
                    {showModal2 ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Bông tai phá cách
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal2(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex justify-center gap-3">
                                            <span>
                                                <img
                                                    src="/src/assets/rank6/bongtaiphacach.jpg"
                                                    alt=""
                                                    style={{
                                                        width: '250px',
                                                        height: '250px',
                                                    }}
                                                />
                                            </span>

                                            <span>
                                                <h1>
                                                    Mã SP: Chưa cập nhật | Thương hiệu: Văn Dũng
                                                </h1>
                                                <h1 className="text-red-500 text-xl font-semibold">
                                                    350.000₫{' '}
                                                </h1>
                                                <h1 style={{ width: '450px' }}>
                                                    Sterling silver (hợp kim bạc 925) là loại hợp
                                                    kim sáng nhất. Bạc tinh khiết quá mềm để làm đồ
                                                    trang sức, vì vậy người ta thường pha hợp kim
                                                    đồng hoặc các kim loại khác để làm cho nó đủ
                                                    cứng và dễ tạo độ bóng. Trong những năm gần đây,
                                                    việc pha kim loại khác còn nhằm tác..
                                                </h1>
                                            </span>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal2(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal2(false)}
                                            >
                                                Thêm Vào Giỏ Hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </>
            </div>

            <div>
                <Image
                    onClick={() => setShowModal3(true)}
                    radius="none"
                    isZoomed
                    width={240}
                    src="/src/assets/rank6/vongbasic.jpg"
                    alt=""
                    className="w-60 h-60 drop-shadow-2xl"
                />
                <>
                    {showModal3 ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Nhận vòng basic
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal3(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex justify-center gap-3">
                                            <span>
                                                <img
                                                    src="/src/assets/rank6/vongbasic.jpg"
                                                    alt=""
                                                    style={{
                                                        width: '250px',
                                                        height: '250px',
                                                    }}
                                                />
                                            </span>

                                            <span>
                                                <h1>
                                                    Mã SP: Chưa cập nhật | Thương hiệu: Văn Dũng
                                                </h1>
                                                <h1 className="text-red-500 text-xl font-semibold">
                                                    700.000₫{' '}
                                                </h1>
                                                <h1 style={{ width: '450px' }}>
                                                    Sterling silver (hợp kim bạc 925) là loại hợp
                                                    kim sáng nhất. Bạc tinh khiết quá mềm để làm đồ
                                                    trang sức, vì vậy người ta thường pha hợp kim
                                                    đồng hoặc các kim loại khác để làm cho nó đủ
                                                    cứng và dễ tạo độ bóng. Trong những năm gần đây,
                                                    việc pha kim loại khác còn nhằm tác..
                                                </h1>
                                            </span>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal3(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal3(false)}
                                            >
                                                Thêm Vào Giỏ Hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </>
            </div>
            <div>
                <Image
                    onClick={() => setShowModal4(true)}
                    radius="none"
                    isZoomed
                    width={240}
                    src="/src/assets/rank6/daychuyenso8.jpg"
                    alt=""
                    className="w-60 h-60 drop-shadow-2xl"
                />
                <>
                    {showModal4 ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Dây chuyền số 8
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal4(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex justify-center gap-3">
                                            <span>
                                                <img
                                                    src="/src/assets/rank6/daychuyenso8.jpg"
                                                    alt=""
                                                    style={{
                                                        width: '250px',
                                                        height: '250px',
                                                    }}
                                                />
                                            </span>

                                            <span>
                                                <h1>
                                                    Mã SP: Chưa cập nhật | Thương hiệu: Văn Dũng
                                                </h1>
                                                <h1 className="text-red-500 text-xl font-semibold">
                                                    600.000₫{' '}
                                                </h1>
                                                <h1 style={{ width: '450px' }}>
                                                    Sterling silver (hợp kim bạc 925) là loại hợp
                                                    kim sáng nhất. Bạc tinh khiết quá mềm để làm đồ
                                                    trang sức, vì vậy người ta thường pha hợp kim
                                                    đồng hoặc các kim loại khác để làm cho nó đủ
                                                    cứng và dễ tạo độ bóng. Trong những năm gần đây,
                                                    việc pha kim loại khác còn nhằm tác..
                                                </h1>
                                            </span>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal4(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal4(false)}
                                            >
                                                Thêm Vào Giỏ Hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </>
            </div>
        </div>
    );
}

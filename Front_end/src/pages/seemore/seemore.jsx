import { Tabs, Tab, Card, CardBody, Image, Button } from '@nextui-org/react';
import React from 'react';
import './seemore.css'
function Seemore() {
    const [showModal, setShowModal] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);

    return (
        <div>
            <spanBody className="flex-col">
                <span className="flex justify-center gap-7 mt-10">
                    <span>
                        <img
                            src="/src/assets/rank2/nhanngoctrai.jpg"
                            alt=""
                            style={{ width: '355px', height: '350px' }}
                        />
                        <span className="flex gap-3 mt-3 ">
                            <img
                                src="/src/assets/rank2/nhanngoctrai.jpg"
                                alt=""
                                className="w-20 h-20"
                            />
                            <img
                                src="/src/assets/rank2/nhanvang.jpg"
                                alt=""
                                className="w-20 h-20"
                            />
                            <img
                                src="/src/assets/rank2/nhantinhnhan.jpg"
                                alt=""
                                className="w-20 h-20"
                            />
                            <img
                                src="/src/assets/rank3/vongtinhnhan.jpg"
                                alt=""
                                className="w-20 h-20"
                            />
                        </span>
                    </span>
                    <span>
                        <h1>Nhẫn Ngọc Trai</h1>
                        <h1 className="font-thin">Tình trạng: Hết hàng | Mã SP: Đang cập nhật</h1>
                        <h1 className="text-red-500 text-xl">Liên Hệ </h1>
                        <h1 className="w-96">
                            Sterling silver (hợp kim bạc 925) là loại hợp kim sáng nhất. Bạc tinh
                            khiết quá mềm để làm đồ trang sức, vì vậy người ta thường pha hợp kim
                            đồng hoặc các kim loại khác để làm cho nó...
                        </h1>
                    </span>
                    <spanLeft className="w-72  bg-slate-50 justify-items-center border-solid ">
                        <span>
                            <h1 className="ml-20 mt-4 font-semibold">Miễn phí giao hàng</h1>
                        </span>
                        <span className="flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 ml-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                />
                            </svg>
                            <h1 className="font-thin">dành cho đơn hàng trên </h1>
                        </span>
                        <span>
                            <h1 className="ml-20 font-thin">500.000đ</h1>
                            <h1 className="mt-5 ">
                                <hr />
                            </h1>
                        </span>
                        <span>
                            <h1 className="ml-20 mt-4 font-semibold">Miễn phí giao hàng</h1>
                        </span>
                        <span className="flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 ml-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                />
                            </svg>
                            <h1 className="font-thin">dành cho đơn hàng trên </h1>
                        </span>
                        <span>
                            <h1 className="ml-20 font-thin">500.000đ</h1>
                            <h1 className="mt-5 ">
                                <hr />
                            </h1>
                        </span>
                        <span>
                            <h1 className="ml-20 mt-4 font-semibold">Miễn phí giao hàng</h1>
                        </span>
                        <span className="flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 ml-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                />
                            </svg>
                            <h1 className="font-thin">dành cho đơn hàng trên </h1>
                        </span>
                        <span>
                            <h1 className="ml-20 font-thin">500.000đ</h1>
                            <h1 className="mt-5 ">
                                <hr />
                            </h1>
                        </span>
                        <span>
                            <h1 className="ml-20 mt-4 font-semibold">Miễn phí giao hàng</h1>
                        </span>
                        <span className="flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 ml-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                />
                            </svg>
                            <h1 className="font-thin">dành cho đơn hàng trên </h1>
                        </span>
                        <span>
                            <h1 className="ml-20 font-thin">500.000đ</h1>
                            <h1 className="mt-5 "></h1>
                        </span>
                    </spanLeft>
                </span>

                <spanCategory className="flex justify-center gap-7 mt-10">
                    <spanCard style={{ width: '770px' }}>
                        <Tabs aria-label="Options">
                            <Tab key="Mô Tả" title="Mô Tả">
                                <Card>
                                    <CardBody>
                                        Sterling silver (hợp kim bạc 925) là loại hợp kim sáng nhất.
                                        Bạc tinh khiết quá mềm để làm đồ trang sức, vì vậy người ta
                                        thường pha hợp kim đồng hoặc các kim loại khác để làm cho nó
                                        đủ cứng và dễ tạo độ bóng. Trong những năm gần đây, việc pha
                                        kim loại khác còn nhằm tác dụng chống xỉn, khiến trang sức
                                        bạc luôn trông như mới. Điều này giúp cho thợ kim hoàn có
                                        thể giữ chúng trong tủ kính mà không mất nhiều thời gian
                                        đánh bóng hoặc bảo quản. Từ sự hồi sinh trong ngành công
                                        nghiệp chế tác trang sức cùng với mức giá nguyên liệu thấp
                                        hơn so với vàng và bạch kim, hợp kim bạc cho phép các nhà
                                        thiết kế thỏa sức sáng tạo, và vì thế người tiêu dùng cũng
                                        có nhiều lựa chọn hơn.
                                        <img
                                            src="/src/assets/rank2/nhanvang.jpg"
                                            alt=""
                                            className="w-52"
                                        />
                                        Mặc dù là loại hợp kim trắng và sáng nhất, bạc có giá rất
                                        phải chăng so với vàng hay bạch kim. Người tiêu dùng luôn
                                        thích thú về sự chênh lệch giá cả này. Bạc rẻ hơn bởi vì nó
                                        được khai thác thường xuyên hơn, xuất hiện trên thị trường
                                        nhiều hơn so với các kim loại quý khác. Tuy vậy, bạc vẫn có
                                        giá trị riêng và nhận được sự yêu thích của một nhóm người
                                        tiêu dùng nhất định.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="Tab Tùy Chỉnh" title="Tab Tùy Chỉnh">
                                <Card>
                                    <CardBody></CardBody>
                                </Card>
                            </Tab>
                            <Tab key="Đánh Gía" title="Đánh Giá">
                                <Card>
                                    <CardBody></CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                        <spanCard>
                            <h1 className="flex justify-center text-2xl font-semibold  mt-7">SẢN PHẨM LIÊN QUAN </h1>
                            <div className="flex gap-7 mt-5">
                                <div>
                                    <Image
                                        onClick={() => setShowModal(true)}
                                        radius="none"
                                        isZoomed
                                        width={240}
                                        alt="NextUI Fruit Image with Zoom"
                                        src="/src/assets/rank2/nhanngoctrai.jpg"
                                        className="w-60 h-60 drop-shadow-2xl    "
                                    />
                                    <>
                                        {showModal ? (
                                            <>
                                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                        {/*content*/}
                                                        <div className=" border-0 rounded-lg shadow-lg relative flex  flex-col w-full bg-white outline-none focus:outline-none">
                                                            {/*header*/}
                                                            <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                                <h3 className=" flex justify-center text-3xl font-semibold">
                                                                    Nhẫn Ngọc Trai
                                                                </h3>
                                                                <button
                                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                    onClick={() =>
                                                                        setShowModal(false)
                                                                    }
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
                                                                        src="/src/assets/rank2/nhanngoctrai.jpg"
                                                                        alt=""
                                                                        style={{
                                                                            width: '250px',
                                                                            height: '250px',
                                                                        }}
                                                                    />
                                                                </span>

                                                                <span>
                                                                    <h1>
                                                                        Mã SP: Chưa cập nhật |
                                                                        Thương hiệu: Văn Dũng
                                                                    </h1>
                                                                    <h1 className="text-red-500 text-xl font-semibold">
                                                                        Liên hệ
                                                                    </h1>
                                                                    <h1 style={{ width: '450px' }}>
                                                                        Sterling silver (hợp kim bạc
                                                                        925) là loại hợp kim sáng
                                                                        nhất. Bạc tinh khiết quá mềm
                                                                        để làm đồ trang sức, vì vậy
                                                                        người ta thường pha hợp kim
                                                                        đồng hoặc các kim loại khác
                                                                        để làm cho nó đủ cứng và dễ
                                                                        tạo độ bóng. Trong những năm
                                                                        gần đây, việc pha kim loại
                                                                        khác còn nhằm tác..
                                                                    </h1>
                                                                </span>
                                                            </div>
                                                            {/*footer*/}
                                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                                <button
                                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setShowModal(false)
                                                                    }
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setShowModal(false)
                                                                    }
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
                                    <div className="w-60 h-28 ">
                                        <h1 className="flex justify-center mt-5 font-semibold ">
                                            Nhẫn Vàng Đặc Biệt
                                        </h1>
                                        <h1 className="flex justify-center mt-3 text-red-600 font-semibold">
                                            400.000đ
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        onClick={() => setShowModal2(true)}
                                        radius="none"
                                        isZoomed
                                        width={240}
                                        src="/src/assets/rank2/nhanvang.jpg   "
                                        alt=""
                                        className="w-60 h-60 drop-shadow-2xl "
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
                                                                    Vòng tay bạch kim
                                                                </h3>
                                                                <button
                                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                    onClick={() =>
                                                                        setShowModal2(false)
                                                                    }
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
                                                                        src="/src/assets/rank2/nhanvang.jpg"
                                                                        alt=""
                                                                        style={{
                                                                            width: '250px',
                                                                            height: '250px',
                                                                        }}
                                                                    />
                                                                </span>

                                                                <span>
                                                                    <h1>
                                                                        Mã SP: Chưa cập nhật |
                                                                        Thương hiệu: Văn Dũng
                                                                    </h1>
                                                                    <h1 className="text-red-500 text-xl font-semibold">
                                                                        500.000₫{' '}
                                                                    </h1>
                                                                    <h1 style={{ width: '450px' }}>
                                                                        Sterling silver (hợp kim bạc
                                                                        925) là loại hợp kim sáng
                                                                        nhất. Bạc tinh khiết quá mềm
                                                                        để làm đồ trang sức, vì vậy
                                                                        người ta thường pha hợp kim
                                                                        đồng hoặc các kim loại khác
                                                                        để làm cho nó đủ cứng và dễ
                                                                        tạo độ bóng. Trong những năm
                                                                        gần đây, việc pha kim loại
                                                                        khác còn nhằm tác...{' '}
                                                                    </h1>
                                                                </span>
                                                            </div>
                                                            {/*footer*/}
                                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                                <button
                                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setShowModal2(false)
                                                                    }
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setShowModal2(false)
                                                                    }
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
                                    <div className="w-60 h-28 ">
                                        <h1 className="flex justify-center mt-5 font-semibold ">
                                            Nhẫn Tình Nhân
                                        </h1>
                                        <h1 className="flex justify-center mt-3 text-red-600 font-semibold">
                                            900.000đ
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        onClick={() => setShowModal3(true)}
                                        radius="none"
                                        isZoomed
                                        width={240}
                                        src="/src/assets/rank2/nhantinhnhan.jpg"
                                        alt=""
                                        className="w-60 h-60 drop-shadow-2xl "
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
                                                                    Nhẫn tình nhân
                                                                </h3>
                                                                <button
                                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                    onClick={() =>
                                                                        setShowModal3(false)
                                                                    }
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
                                                                        src="/src/assets/rank2/nhantinhnhan.jpg"
                                                                        alt=""
                                                                        style={{
                                                                            width: '250px',
                                                                            height: '250px',
                                                                        }}
                                                                    />
                                                                </span>

                                                                <span>
                                                                    <h1>
                                                                        Mã SP: Chưa cập nhật |
                                                                        Thương hiệu: Văn Dũng
                                                                    </h1>
                                                                    <h1 className="text-red-500 text-xl font-semibold">
                                                                        500.000₫{' '}
                                                                    </h1>
                                                                    <h1 style={{ width: '450px' }}>
                                                                        Sterling silver (hợp kim bạc
                                                                        925) là loại hợp kim sáng
                                                                        nhất. Bạc tinh khiết quá mềm
                                                                        để làm đồ trang sức, vì vậy
                                                                        người ta thường pha hợp kim
                                                                        đồng hoặc các kim loại khác
                                                                        để làm cho nó đủ cứng và dễ
                                                                        tạo độ bóng. Trong những năm
                                                                        gần đây, việc pha kim loại
                                                                        khác còn nhằm tác...
                                                                    </h1>
                                                                </span>
                                                            </div>
                                                            {/*footer*/}
                                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                                <button
                                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setShowModal3(false)
                                                                    }
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setShowModal3(false)
                                                                    }
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
                                    <div className="w-60 h-28 ">
                                        <h1 className="flex justify-center mt-5 font-semibold ">
                                            Nhẫn Gắn Kim Cương
                                        </h1>
                                        <h1 className="flex justify-center mt-3 text-red-600 font-semibold">
                                            300.000đ
                                        </h1>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </spanCard>
                    </spanCard>
                   <spanLeft className= "w-72 h-56  bg-slate-50 justify-items-center border-solid flex-col spanLeftSticky " >
                        <span>
                            <h1 className="ml-10 text-xl mt-4 font-semibold">Nhẫn Vàng Đặc Biệt</h1>
                            <h1 className="ml-10 font-thin">Tình trạng: Hết hàng</h1>
                            <span>
                            <h1 className="ml-10 font-thin">500.000đ</h1>
                           <Button className='bg-red-500 text-white ml-10 text-xl font-semibold mt-3'> Mua Ngay</Button>
                        </span>
                        </span>

                       
                        <spanSmatphon >
                        <span className="flex ml-10 gap-1 mt-3">
                            <h1>hoặc gọi ngay</h1>
                            <a href="" className="text-red-500">
                                {' '}
                                1900 6750
                            </a>
                            <h1>để tư</h1>
                        </span>
                        <span>
                            <h1 className="ml-10">vấn miễn phí</h1>
                        </span>
                        </spanSmatphon>
                       
                    </spanLeft>
                </spanCategory>
            </spanBody>
        </div>
    );
}

export default Seemore;

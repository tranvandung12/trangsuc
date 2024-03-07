/* eslint-disable no-unused-vars */
import { Card as NextUICard, Image, Slider } from '@nextui-org/react';
import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from '@nextui-org/react';
import { Card } from '../../components/card/card';
import { Input } from '@nextui-org/react';
import { useState } from 'react';


function Promotional() {
    const data = [
        {
            id: 1,
            productName: 'Vòng Tình Nhân',
            price: 999999,
        },
        {
            id: 2,
            productName: 'Bông Tai Phá Cách ',
            price: 350000,
            
        },
        {
            id: 3,
            productName: 'Vòng Basic',
            price: 700000,
        },
    ];
    const data1 = [
        {
            id: 4,
            productName: 'Dây Chuyền Số 8',
            price: 600000,
        },
        {
            id: 5,
            productName: 'Chìa Khóa Tình Yêu',
            price: 450000,
        },
        {
            id: 6,
            productName: 'Nhẫn Đôi Kim Cương',
            price: 800000,
        },
    ];
    const data2 = [
        {
            id: 7,
            productName: 'Bông Tai Ngọc Trai',
            price: 500000,
        },
        {
            id: 8,
            productName: 'Bông Tai Cao Cấp',
            price: 400000,
            
        },
        {
            id: 9,
            productName: 'Nhẫn Tình Yêu',
            price: 900000,
        },
    
    ];
    const data3 = [
        {
            id: 7,
            productName: 'Nhẫn Gắn Kim Cương Cao Cấp',
            price: 900000,
        },
        {
            id: 8,
            productName: 'Nhẫn Vàng Cao Cấp',
            price: 100000,
            
        },
        {
            id: 9,
            productName: 'Vòng Tay Cao Cấp',
            price: 400000,
        },
    
    ];
    const data4 = [
        {
            id: 7,
            productName: 'Nhẫn Ngọc Trai Cao Cấp ',
            price: 500000,
        },
      
    ];
    const [showModal, setShowModal] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const [showModal4, setShowModal4] = React.useState(false);
    const [showModal5, setShowModal5] = React.useState(false);
    const [showModal6, setShowModal6] = React.useState(false);
    const [showModal7, setShowModal7] = React.useState(false);
    const [showModal8, setShowModal8] = React.useState(false);
    const [showModal9, setShowModal9] = React.useState(false);
    const [showModal10, setShowModal10] = React.useState(false);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };

    const [colors, setColors] = useState({
        yellow: false,
        red: false,
        white: false,
        brown: false,
        orange: false,
        pink: false,
    });

    // Hàm xử lý khi người dùng nhấp vào ô vuông
    const handleClick = (color) => {
        // Sao chép trạng thái hiện tại của màu sắc
        const updatedColors = { ...colors };
        // Đảo ngược trạng thái của màu được chọn
        updatedColors[color] = !updatedColors[color];
        // Cập nhật trạng thái mới
        setColors(updatedColors);
    };

    const [selected, setSelected] = useState(null);

    const handleClick1 = (index) => {
        setSelected(index === selected ? null : index);
    };
    const [selected2, setSelected2] = useState(null);

    const handleClick2 = (index) => {
        setSelected(index === selected ? null : index);
    };
    const [selected4, setSelected4] = useState(null);
    const handleClick4 = (index) => {
        setSelected(index === selected ? null : index);
    };
    
    return (
        <div className='px-5'>
            <spanBody className="flex flex-col md:flex-row  justify-center  gap-10 mt-6">
                <spanRaight>
                    <div className="flex rounded-lg  ">
                        <div className="flex w-10 items-center  justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-400 bg-blue-200 ">
                            <svg
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className="pointer-events-none absolute w-5 fill-gray-500 transition"
                            >
                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="w-full max-w-[160px] bg-slate-200 pl-2 text-base font-semibold outline-0"
                            placeholder="tiềm kiếm"
                            id=""
                        />
                        <input
                            type="button"
                            value="Search"
                            className="bg-red-400 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                        />
                    </div>
                    <spanCategory>
                        <span>
                            <h1 className="text-xl font-semibold mt-10">Danh mục</h1>
                            <h1 className="mt-2">
                                <a href="">vòng tay(10)</a>
                            </h1>
                            <h1 className="mt-2">
                                <a href="">dây chuyền(8)</a>
                            </h1>
                            <h1 className="mt-2">
                                <a href="">bông tai(13)</a>
                            </h1>
                            <h1 className="mt-2">
                                <a href="">sản phẩm hót(13)</a>
                            </h1>
                        </span>
                        <spanPrise>
                            <h1 className="mt-5 font-semibold text-xl">Mức giá</h1>

                            <span>
                                <Slider
                                    label="VNĐ"
                                    step={50}
                                    minValue={0}
                                    maxValue={1000}
                                    defaultValue={[100, 500]}
                                    formatOptions={{ style: 'currency', currency: 'USD' }}
                                    className="max-w-md mt-6"
                                />
                            </span>
                        </spanPrise>
                        <span className="flex gap-3 mt-3">
                            <Input
                                className="w-28 "
                                type="number"
                                placeholder="0"
                                labelPlacement="outside"
                                startContent={
                                    <div className="pointer-events-none flex items-center"></div>
                                }
                            />
                            <span>__</span>
                            <Input
                                className="w-28"
                                type="number"
                                placeholder="0.00"
                                labelPlacement="outside"
                                startContent={
                                    <div className="pointer-events-none flex items-center">
                                        <span className="text-default-400 text-small">đ</span>
                                    </div>
                                }
                            />
                        </span>

                        <Button radius="none" className="mt-4 w-28">
                            lọc giá
                        </Button>
                        <div>
                            <h1 className="text-xl font-semibold mt-6">Mầu Sắc</h1>
                            <div className="flex gap-32 mt-4">
                                <span
                                    className={`flex w-5 h-5 border-black border-1 ${
                                        colors.yellow ? 'bg-amber-200' : 'bg-slate-100'
                                    }`}
                                    onClick={() => handleClick('yellow')}
                                >
                                    <h1 className="ml-8">Vàng</h1>
                                </span>
                                <span
                                    className={`w-5 h-5 border-black border-1 ${
                                        colors.red ? 'bg-red-600' : 'bg-slate-100'
                                    }`}
                                    onClick={() => handleClick('red')}
                                >
                                    <h1 className="ml-8">Đỏ</h1>
                                </span>
                            </div>
                            <div className="flex gap-32 mt-5">
                                <span
                                    className={`flex w-5 h-5 border-black border-1 ${
                                        colors.white ? 'bg-white' : 'bg-slate-100'
                                    }`}
                                    onClick={() => handleClick('white')}
                                >
                                    <h1 className="ml-8">Trắng</h1>
                                </span>
                                <span
                                    className={`w-5 h-5 border-black border-1 ${
                                        colors.brown ? 'bg-yellow-700' : 'bg-slate-100'
                                    }`}
                                    onClick={() => handleClick('brown')}
                                >
                                    <h1 className="ml-8">Nâu</h1>
                                </span>
                            </div>
                            <div className="flex gap-32 mt-5">
                                <span
                                    className={`flex w-5 h-5 border-black border-1 ${
                                        colors.orange ? 'bg-amber-600' : 'bg-slate-100'
                                    }`}
                                    onClick={() => handleClick('orange')}
                                >
                                    <h1 className="ml-8">Cam</h1>
                                </span>
                                <span
                                    className={`w-5 h-5 border-black border-1 ${
                                        colors.pink ? 'bg-red-300' : 'bg-slate-100'
                                    }`}
                                    onClick={() => handleClick('pink')}
                                >
                                    <h1 className="ml-8">Hồng</h1>
                                </span>
                            </div>
                        </div>

                        <div className="mt-7">
                            <h1 className="text-xl font-semibold">Kích Thước</h1>
                            <div className="flex gap-32 mt-4">
                                <span
                                    className={`flex w-5 h-5 border-black border-1 ${
                                        selectedColor === 'XS' ? 'bg-black' : ''
                                    }`}
                                    onClick={() => handleColorSelection('XS')}
                                >
                                    <h1 className="ml-8">XS</h1>
                                </span>
                                <span
                                    className={`w-5 h-5 border-black border-1 ${
                                        selectedColor === 'S' ? 'bg-black' : ''
                                    }`}
                                    onClick={() => handleColorSelection('S')}
                                >
                                    <h1 className="ml-8">S</h1>
                                </span>
                            </div>
                            <div className="flex gap-32 mt-5">
                                <span
                                    className={`flex w-5 h-5 border-black border-1 ${
                                        selectedColor === 'M' ? 'bg-black' : ''
                                    }`}
                                    onClick={() => handleColorSelection('M')}
                                >
                                    <h1 className="ml-8">M</h1>
                                </span>
                                <span
                                    className={`w-5 h-5 border-black border-1 ${
                                        selectedColor === 'L' ? 'bg-black' : ''
                                    }`}
                                    onClick={() => handleColorSelection('L')}
                                >
                                    <h1 className="ml-8">L</h1>
                                </span>
                            </div>
                            <div className="flex gap-32 mt-5">
                                <span
                                    className={`flex w-5 h-5 border-black border-1 ${
                                        selectedColor === 'XL' ? 'bg-black' : ''
                                    }`}
                                    onClick={() => handleColorSelection('XL')}
                                >
                                    <h1 className="ml-8">XL</h1>
                                </span>
                                <span
                                    className={`w-5 h-5 border-black border-1 ${
                                        selectedColor === 'XXL' ? 'bg-black' : ''
                                    }`}
                                    onClick={() => handleColorSelection('XXL')}
                                >
                                    <h1 className="ml-8">XXL</h1>
                                </span>
                            </div>
                        </div>
                        <span>
                            <h1></h1>
                        </span>
                        <span>
                            <h1 className="mt-5 text-xl font-semibold">Sản Phẩm</h1>
                            <div className="flex gap-32 mt-5">
                                <div
                                    className={`w-5 h-5 ${
                                        selected === 0
                                            ? 'bg-blue-900'
                                            : 'bg-white border border-black'
                                    }`}
                                    onClick={() => handleClick1(0)}
                                >
                                    {' '}
                                    <h1 className="ml-8">Nhẫn</h1>
                                </div>
                                <div
                                    className={`w-5 h-5 ${
                                        selected === 1
                                            ? 'bg-blue-900'
                                            : 'bg-white border border-black'
                                    }`}
                                    onClick={() => handleClick1(1)}
                                >
                                    <h1 className="ml-8 w-28">Vòng Tay</h1>
                                </div>
                            </div>
                        </span>
                        <span>
                            <h1 className="mt-5 text-xl font-semibold">Thương Hiệu</h1>
                            <div className="flex gap-32 mt-5">
                                <div
                                    className={`w-5 h-5 ${
                                        selected === 2
                                            ? 'bg-blue-900'
                                            : 'bg-white border border-black'
                                    }`}
                                    onClick={() => handleClick2(2)}
                                >
                                    {' '}
                                    <h1 className="ml-8 w-28">Bảo Kim</h1>
                                </div>
                                <div
                                    className={`w-5 h-5 ${
                                        selected === 3
                                            ? 'bg-blue-900'
                                            : 'bg-white border border-black'
                                    }`}
                                    onClick={() => handleClick2(3)}
                                >
                                    <h1 className="ml-8 w-28">Ngân Hoàng</h1>
                                </div>
                            </div>
                            <div
                                className={`w-5 h-5 mt-5 ${
                                    selected === 4 ? 'bg-blue-900' : 'bg-white border border-black'
                                }`}
                                onClick={() => handleClick4(4)}
                            >
                                <h1 className="ml-8 w-28">Văn Dũng</h1>
                            </div>
                        </span>
                    </spanCategory>
                    <spanCard>
                        <span>
                            <h1 className="text-xl font-semibold mt-5">Sản Phẩm Nổi Bậc</h1>
                            <div className="flex mt-5 gap-4">
                                <div>
                                    <img
                                        src="/src/assets/rank2/nhanngoctrai.jpg"
                                        alt=""
                                        className="w-20 h-20"
                                    />
                                </div>
                                <div>
                                    <h1 className="mt-2 font-semibold"> Nhẫn Ngọc Trai</h1>
                                    <h1 className="mt-5 font-semibold text-red-500"> Liên Hệ</h1>
                                </div>
                            </div>
                        </span>
                        <span>
                            <div className="flex mt-5 gap-4">
                                <div>
                                    <img
                                        src="/src/assets/rank2/nhanngoctrai.jpg"
                                        alt=""
                                        className="w-20 h-20"
                                    />
                                </div>
                                <div>
                                    <h1 className="mt-2 font-semibold"> Nhẫn Vàng Đặc Biệt</h1>
                                    <h1 className="mt-5 font-semibold text-red-500">400.000đ</h1>
                                </div>
                            </div>
                        </span>
                        <span>
                            <div className="flex mt-5 gap-4">
                                <div>
                                    <img
                                        src="/src/assets/rank2/nhanngoctrai.jpg"
                                        alt=""
                                        className="w-20 h-20"
                                    />
                                </div>
                                <div>
                                    <h1 className="mt-2 font-semibold"> Nhẫn Tình Nhân</h1>
                                    <h1 className="mt-5 font-semibold text-red-500"> Hết Hàng</h1>
                                </div>
                            </div>
                        </span>
                        <span>
                            <div className="flex mt-5 gap-4">
                                <div>
                                    <img
                                        src="/src/assets/rank2/nhanngoctrai.jpg"
                                        alt=""
                                        className="w-20 h-20"
                                    />
                                </div>
                                <div>
                                    <h1 className="mt-2 font-semibold"> Nhẫn Gắn Kim Cương</h1>
                                    <h1 className="mt-5 font-semibold text-red-500"> 100.000đ</h1>
                                </div>
                            </div>
                        </span>
                        <spanBenner>
                            <img src="/src/assets/benner/bennersanpham.jpg" alt="" className='mt-5' />
                        </spanBenner>
                    </spanCard>
                </spanRaight>
                <spanLeft>
                    <div className="flex gap-60">
                        <span className=" flex ">
                            <h1 className="text-xl font-semibold">Sản Phẩm Khuyến Mãi</h1>
                            <h1 className="text-sm mt-3">(13 sản phẩm)</h1>
                        </span>
                        <span className="">
                            <h1>sắp xế theo</h1>
                        </span>
                    </div>
                    <span>
                        <h1 className="mt-5">
                            <hr />
                        </h1>
                    </span>
                    <div className="flex justify-center gap-6 mt-6  ">
                        <div>
                            <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank3/vongtinhnhan.jpg  "
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
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
                                                            Vòng Tình Nhân
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
                                                                src="/src/assets/rank3/vongtinhnhan.jpg"
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
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
                            <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal2(true)}
                                    radius="none"
                                    isZoomed
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank3/bongtaiphacach.jpg "
                                    className="w-60 h-60  drop-shadow-2xl"
                                />
                            </NextUICard>
                            <>
                                {showModal2 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Bông Tai Phá Cách
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
                                                                src="/src/assets/rank3/bongtaiphacach.jpg "
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
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
                                                            Save Changes
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
                                alt="NextUI Fruit Image with Zoom"
                                src="/src/assets/rank6/vongbasic.jpg "
                                className="w-60 h-60  drop-shadow-2xl"
                            />
                            <>
                                {showModal3 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Vòng Basic 
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
                                                                src="/src/assets/rank6/vongbasic.jpg "
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
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
                                                            Save Changes
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
                    <div className="flex justify-center gap-6 ">
                    {data &&
                        data.map((prd) => (
                            <Card
                                key={prd.id}
                                productName={prd.productName}
                                price={`${prd.price.toLocaleString('vi-VN')}đ`}
                                discountedPrice={
                                    prd.discountedPrice
                                        ? `${prd.discountedPrice.toLocaleString('vi-VN')}đ`
                                        : null
                                }
                            />
                        ))}
                    </div>
                    <div className="flex justify-center gap-6 mt-6  ">
                        <div>

                            <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal4(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank6/daychuyenso8.jpg "
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
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
                                                            Dây Chuyền Số 8
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
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
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
                        <div>
                        <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal5(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/bracelet/chiakhoatinhyeu.jpg"
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
                              <>
                                {showModal5 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Chìa Khóa Tình Yêu
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal5(false)}
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
                                                                src="/src/assets/bracelet/chiakhoatinhyeu.jpg"
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal5(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal5(false)}
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
                        <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal6(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/bracelet/nhandoikimcuong.jpg  "
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
                              <>
                                {showModal6 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Nhẫn Đôi Kim Cương
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal6(false)}
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
                                                                src="/src/assets/bracelet/nhandoikimcuong.jpg"
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal6(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal6(false)}
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
                    <div className="flex justify-center gap-6 ">
                    {data1 &&
                        data1.map((prd) => (
                            <Card
                                key={prd.id}
                                productName={prd.productName}
                                price={`${prd.price.toLocaleString('vi-VN')}đ`}
                                discountedPrice={
                                    prd.discountedPrice
                                        ? `${prd.discountedPrice.toLocaleString('vi-VN')}đ`
                                        : null
                                }
                            />
                        ))}
                    </div>
                    
                    <div className="flex justify-center gap-6 mt-6  ">
                        <div>
                        <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal7(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank6/bongtaiphacach.jpg"
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
                              <>
                                {showModal7 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Bông Tai Ngọc Trai
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal7(false)}
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
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal7(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal7(false)}
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
                        <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal8(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank2/bongtaicaocap.jpg"
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
                              <>
                                {showModal8 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Bông Tai Cao Cấp
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal8(false)}
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
                                                                src="/src/assets/rank2/bongtaicaocap.jpg "
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal8(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal8(false)}
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
                        <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal9(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank2/nhantinhnhan.jpg  "
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
                              <>
                                {showModal9 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Nhẫn Tình Yêu
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal9(false)}
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
                                                                src="/src/assets/rank2/nhantinhnhan.jpg "
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal9(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal9(false)}
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

                    <div className="flex justify-center gap-6 ">
                    {data2 &&
                        data2.map((prd) => (
                            <Card
                                key={prd.id}
                                productName={prd.productName}
                                price={`${prd.price.toLocaleString('vi-VN')}đ`}
                                discountedPrice={
                                    prd.discountedPrice
                                        ? `${prd.discountedPrice.toLocaleString('vi-VN')}đ`
                                        : null
                                }
                            />
                        ))}
                    </div>
                    

                    <div className="flex justify-center gap-6 mt-6  ">
                        <div>
                        <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal7(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank2/nhangankimcuong.jpg"
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
                              <>
                                {showModal7 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Nhẫn Gắn Kim Cương Cao Cap
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal7(false)}
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
                                                                src="/src/assets/rank2/nhangankimcuong.jpg"
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal7(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal7(false)}
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
                        <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal8(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank2/nhanvang.jpg"
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
                              <>
                                {showModal8 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Nhẫn Vàng Cao Cấp
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal8(false)}
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
                                                                src="/src/assets/rank2/nhanvang.jpg "
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal8(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal8(false)}
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
                        <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal9(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank3/vongbachkim.jpg"
                                    className="w-60 h-60  drop-shadow-2xl "
                                />
                            </NextUICard>
                              <>
                                {showModal9 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Vòng Tay Cao Cấp
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal9(false)}
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
                                                                src="/src/assets/rank3/vongbachkim.jpg "
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal9(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal9(false)}
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

                    <div className="flex justify-center gap-6 ">
                    {data3 &&
                        data3.map((prd) => (
                            <Card
                                key={prd.id}
                                productName={prd.productName}
                                price={`${prd.price.toLocaleString('vi-VN')}đ`}
                                discountedPrice={
                                    prd.discountedPrice
                                        ? `${prd.discountedPrice.toLocaleString('vi-VN')}đ`
                                        : null
                                }
                            />
                        ))}
                    </div>


                    <div className='w-60 h-60 mt-6 '>
                    <NextUICard radius="none">
                                <Image
                                    onClick={() => setShowModal10(true)}
                                    isZoomed
                                    radius="none"
                                    width={240}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/src/assets/rank2/nhanngoctrai.jpg  "
                                    className="w-60 h-60 drop-shadow-2xl "
                                />
                            </NextUICard>
                            <>
                                {showModal10 ? (
                                    <>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                           Nhẫn Ngọc Trai Cao Cấp
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal10(false)}
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
                                                                src="/src/assets/rank2/nhanngoctrai.jpg "
                                                                alt=""
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px',
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <h1>
                                                                Mã SP: Chưa cập nhật | Thương hiệu:
                                                                Ngân Hoàng
                                                            </h1>
                                                            <h1 className="text-red-500 text-xl font-semibold">
                                                                500.000₫{' '}
                                                            </h1>
                                                            <h1 style={{ width: '450px' }}>
                                                                Sterling silver (hợp kim bạc 925) là
                                                                loại hợp kim sáng nhất. Bạc tinh
                                                                khiết quá mềm để làm đồ trang sức,
                                                                vì vậy người ta thường pha hợp kim
                                                                đồng hoặc các kim loại khác để làm
                                                                cho nó đủ cứng và dễ tạo độ bóng.
                                                                Trong những năm gần đây, việc pha
                                                                kim loại khác còn nhằm tác...{' '}
                                                            </h1>
                                                        </span>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal10(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal10(false)}
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
                    <div className="flex w-60 h-60 gap-6 ">
                    {data4 &&
                        data4.map((prd) => (
                            <Card
                                key={prd.id}
                                productName={prd.productName}
                                price={`${prd.price.toLocaleString('vi-VN')}đ`}
                                discountedPrice={
                                    prd.discountedPrice
                                        ? `${prd.discountedPrice.toLocaleString('vi-VN')}đ`
                                        : null
                                }
                            />
                        ))}
                    </div>
                </spanLeft>
            </spanBody>
        </div>
    );
}

export default Promotional;

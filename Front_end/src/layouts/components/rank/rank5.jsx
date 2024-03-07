/* eslint-disable no-unused-vars */
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

function Rank5() {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (image) => {
        setHoveredImage(image);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    return (
        <div className="w-full h-full flex justify-center gap-6 mt-11 ">
            <div className="flex justify-center relative">
                <div
                    className="w-60 h-60 relative"
                    onMouseEnter={() => handleMouseEnter("bongtai")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="/src/assets/rank5/bongtai.jpg"
                        alt=" "
                        className="w-full h-full"
                    />
                    <span >
                        <h1 className="absolute inset-0 flex justify-center items-center text-black mt-36 text-xl">Bông Tai</h1>
                        
                    </span>
                    <h1 className="absolute inset-0 flex justify-center items-center text-black mt-48 font-thin ">Xem danh mục sản phẩm</h1>
                    {hoveredImage === "bongtai" && (
                        <div className="absolute inset-0 bg-red-500 opacity-50"></div>
                    )}
                    {hoveredImage === "bongtai" && (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <Button className='bg-blue-400' variant="solid"><a href="/bongtai">Xem ngay</a></Button>
                        </div>
                    )}
                </div>
            </div>

            <div className="relative group">
                <div
                    className="w-60 h-60 relative"
                    onMouseEnter={() => handleMouseEnter("daychuyen")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="/src/assets/rank5/daychuyen.jpg"
                        alt=""
                        className="w-full h-full"
                    />
                    <span >
                        <h1 className="absolute inset-0 flex justify-center items-center text-black mt-36 text-xl">Dây Chuyền</h1>
                        
                    </span>
                    <h1 className="absolute inset-0 flex justify-center items-center text-black mt-48 font-thin ">Xem danh mục sản phẩm</h1>
                    {hoveredImage === "daychuyen" && (
                        <div className="absolute inset-0 bg-red-500 opacity-50"></div>
                    )}
                    {hoveredImage === "daychuyen" && (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <Button className='bg-blue-400' variant="solid"><a href="/daychuyen">Xem ngay</a></Button>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-center relative">
                <div
                    className="w-60 h-60 relative"
                    onMouseEnter={() => handleMouseEnter("nhancuoi")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="/src/assets/rank5/nhancuoi.jpg"
                        alt=""
                        className="w-full h-full"
                    />
                    <span >
                        <h1 className="absolute inset-0 flex justify-center items-center text-black mt-36 text-xl">Nhẫn cưới</h1>
                        
                    </span>
                    <h1 className="absolute inset-0 flex justify-center items-center text-black mt-48 font-thin ">Xem danh mục sản phẩm</h1>
                    {hoveredImage === "nhancuoi" && (
                        <div className="absolute inset-0 bg-red-500 opacity-50"></div>
                    )}
                    {hoveredImage === "nhancuoi" && (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <Button className='bg-blue-400' variant="solid"><a href="/nhancuoi">Xem ngay</a></Button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center relative">
                <div
                    className="w-60 h-60 relative"
                    onMouseEnter={() => handleMouseEnter("bongtai2")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="/src/assets/rank5/bongtai.jpg"
                        alt=""
                        className="w-full h-full"
                    />
                    <span >
                        <h1 className="absolute inset-0 flex justify-center items-center text-black mt-36 text-xl">Vòng đeo tay</h1>
                        
                    </span>
                    <h1 className="absolute inset-0 flex justify-center items-center text-black mt-48 font-thin ">Xem danh mục sản phẩm</h1>
                    {hoveredImage === "bongtai2" && (
                        <div className="absolute inset-0 bg-red-500 opacity-50"></div>
                    )}
                    {hoveredImage === "bongtai2" && (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <Button className='bg-blue-400' variant="solid"><a href="/vòngtay">Xem ngay</a></Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Rank5;

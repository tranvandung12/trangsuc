/* eslint-disable no-unused-vars */
import React from 'react';
import { Image } from '@nextui-org/react';
export default function Rank() {
    return (
        <div className="  flex justify-center gap-10 mt-12    ">
            <div className=" ">
                <Image
                    
                    isZoomed
                    width={240}
                    alt="NextUI Fruit Image with Zoom"
                    src="/src/assets/rank/1.jpg"
                    className="w-60 h-60  drop-shadow-2xl"
                    
                />
            </div>
            <div className=" ">
            <Image
                    isZoomed
                    width={240}
                    alt="NextUI Fruit Image with Zoom"
                    src="/src/assets/rank/2.jpg"
                    className="w-60 h-60  drop-shadow-2xl"
                />
            </div>
            <div className="">
            <Image
                    isZoomed
                    width={240}
                    alt="NextUI Fruit Image with Zoom"
                    src="/src/assets/rank/3.jpg"
                    className="w-60 h-60  drop-shadow-2xl"
                />
            </div>
        </div>
    );
}

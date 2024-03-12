import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
function News() {
    return (
        
        <div className="container mx-auto" >
            <spanheader className="lg:flex  justify-center gap-7  ">
                <span className="lg:w-1/4 mt-7">
                    <h1 className="text-2xl font-semibold ">Danh Mục</h1>
                    <h1 className="mt-5">
                        <a href="/home">trang chủ</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/tatcasanpham">sản phẩm</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/gioithieu">giới thiệu</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/news">tin tức</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/contact">liên hệ</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/agency">địa lý</a>
                    </h1>

                    <section>
                        <h1 className="mt-7 text-2xl font-semibold ">TIN NỔI BẬT</h1>
                        <div className="flex mt-5 text-base gap-2">
                            <img
                                src="https://bizweb.dktcdn.net/100/260/640/articles/blog-list-img1-min.jpg?v=1507470322807"
                                alt=""
                                className="w-24 h-12"
                            />

                            <span>
                                <a href="/baivietmau">bài viết mẫu</a>
                                <h1 className="text-sm font-light ">23/1/2024</h1>
                            </span>
                        </div>
                        <div className="flex mt-5 text-base gap-2">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/small/100/260/640/articles/blog-list-img2-min.jpg?v=1507470340003"
                                alt=""
                                className="w-24 h-12"
                            />
                            <span>
                                <a href="/baivietmau2">bài viết mẫu 2</a>
                                <h1 className="text-sm font-light ">23/1/2024</h1>
                            </span>
                        </div>
                        <div className="flex mt-5 text-base gap-2">
                            <img
                                src="https://bizweb.dktcdn.net/100/260/640/articles/blog-list-img3-min.jpg?v=1507470353707"
                                alt=""
                                className="w-24 h-12"
                            />

                            <span>
                                <a href="/baivietmau3">bài viết mẫu 3</a>
                                <h1 className="text-sm font-light ">23/1/2024</h1>
                            </span>
                        </div>
                    </section>
                    <spantags>
                        <span className="text-xl font-semibold ">
                            <h1 className="mt-9">THẺ TAGS</h1>
                        </span>
                       
                        <div className="flex gap-4 items-center">
                            
                            <Button radius="none" variant="bordered">
                                <a href="">Bông Tai</a>
                                </Button>
                            <Button radius="none" variant="bordered">
                               <a href=""> Cucumber</a>
                                </Button>
                        </div>
                        <div className="flex gap-4 mt-3 items-center">
                            
                            <Button radius="none" variant="bordered">
                                <a href="">Dây chuyền</a>
                                </Button>
                            <Button radius="none" variant="bordered">
                               <a href=""> Mỹ phẩm</a>
                                </Button>
                            <Button radius="none" variant="bordered">
                                <a href="">tag</a>
                                </Button>
                        </div>
                        <div className="flex gap-4 mt-3 items-center">
                            
                            <Button radius="none" variant="bordered">
                                <a href="">Thời trang</a>
                                </Button>
                            <Button radius="none" variant="bordered">
                            <a href="">Thời trang</a>
                                </Button>
                           
                        </div>
                        <div className="flex gap-4 mt-3 items-center">
                            
                            <Button radius="none" variant="bordered">
                                <a href="">Trang sưc</a>
                                </Button>
                            <Button radius="none" variant="bordered">
                               <a href=""> Vòng tay</a>
                                </Button>
                        </div>
                       
                    </spantags>
                    <spanimges>
                        <span>
                        <img src="https://bizweb.dktcdn.net/100/260/640/themes/801977/assets/aside_banner.png?1676017321988" alt="" className='mt-12' />
                        </span>
                       
                    </spanimges>

                </span>

                {/* ảnh */}
                <spanbody>
                    <img
                        src="https://bizweb.dktcdn.net/100/260/640/articles/blog-list-img1-min.jpg?v=1507470322807"
                        alt=""
                        className="mt-4"
                    />

                    <h1 className="text-xl font-semibold mt-5">Bài viết mẫu</h1>

                    <span className="flex gap-5 mt-2">
                        <span className="flex gap-1">
                            <h1>
                                {' '}
                                <FaCalendarAlt />
                            </h1>
                            <h1 className="flex text-sm ">23/1/2024</h1>
                        </span>

                        <span className="flex gap-1">
                            <h1>
                                <FaRegComment />
                            </h1>
                            <h1 className="flex text-sm  "> 1 Bình luận</h1>
                        </span>
                    </span>
                    <spancommen>
                        <span className="text-base	mt-2">
                            <h1>
                                Lorem Ipsum is simply dummy text of the rinting and typesetting
                                industry. Lorem Ipsum has been the industry standard{' '}
                            </h1>
                            <h1>
                                sincer they 1500s. Nullam id condimentum purus. In non ex at ligula
                                fringilla obortis. Ut et mauris auctor, aliquet nulla{' '}
                            </h1>
                            <h1>sed, aliquam mauris....</h1>
                            <span className="flex text-red-500  ">
                                <a className="text-sm mt-0.5 " href="">
                                    Đọc tiếp
                                </a>
                                <a href="">
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-3 h-3 mt-2 gap-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </a>
                            </span>
                        </span>
                        <spanbody >
                            <img
                                src="https://bizweb.dktcdn.net/100/260/640/articles/blog-list-img2-min.jpg?v=1507470340003"
                                alt=""
                                className="mt-4"
                            />

                            <h1 className="text-xl font-semibold mt-5">Bài viết mẫu 2</h1>

                            <span className="flex gap-5 mt-2">
                                <span className="flex gap-1">
                                    <h1>
                                        {' '}
                                        <FaCalendarAlt />
                                    </h1>
                                    <h1 className="flex text-sm ">23/1/2024</h1>
                                </span>

                                <span className="flex gap-1">
                                    <h1>
                                        <FaRegComment />
                                    </h1>
                                    <h1 className="flex text-sm  "> 0 Bình luận</h1>
                                </span>
                            </span>
                            <spancommen>
                                <span className="text-base	mt-2">
                                    <h1>
                                        Lorem Ipsum is simply dummy text of the rinting and
                                        typesetting industry. Lorem Ipsum has been the industry
                                        standard{' '}
                                    </h1>
                                    <h1>
                                        sincer they 1500s. Nullam id condimentum purus. In non ex at
                                        ligula fringilla obortis. Ut et mauris auctor, aliquet nulla{' '}
                                    </h1>
                                    <h1>sed, aliquam mauris....</h1>
                                    <span className="flex text-red-500  ">
                                        <a className="text-sm mt-0.5 " href="">
                                            Đọc tiếp
                                        </a>
                                        <a href="">
                                            {' '}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-3 h-3 mt-2 gap-1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </a>
                                    </span>
                                </span>
                            </spancommen>
                        </spanbody>
                        <spanbody>
                            <img
                                src="https://bizweb.dktcdn.net/100/260/640/articles/blog-list-img3-min.jpg?v=1507470353707"
                                alt=""
                                className="mt-4"
                            />

                            <h1 className="text-xl font-semibold mt-5">Bài viết mẫu 3</h1>

                            <span className="flex gap-5 mt-2">
                                <span className="flex gap-1">
                                    <h1>
                                        {' '}
                                        <FaCalendarAlt />
                                    </h1>
                                    <h1 className="flex text-sm ">23/1/2024</h1>
                                </span>

                                <span className="flex gap-1">
                                    <h1>
                                        <FaRegComment />
                                    </h1>
                                    <h1 className="flex text-sm  "> 1 Bình luận</h1>
                                </span>
                            </span>
                            <spancommen>
                                <span className="text-base	mt-2">
                                    <h1>
                                        Lorem Ipsum is simply dummy text of the rinting and
                                        typesetting industry. Lorem Ipsum has been the industry
                                        standard{' '}
                                    </h1>
                                    <h1>
                                        sincer they 1500s. Nullam id condimentum purus. In non ex at
                                        ligula fringilla obortis. Ut et mauris auctor, aliquet nulla{' '}
                                    </h1>
                                    <h1>sed, aliquam mauris....</h1>
                                    <span className="flex text-red-500  ">
                                        <a className="text-sm mt-0.5 " href="">
                                            Đọc tiếp
                                        </a>
                                        <a href="">
                                            {' '}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-3 h-3 mt-2 gap-1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </a>
                                    </span>
                                </span>
                            </spancommen>
                        </spanbody>
                    </spancommen>
                </spanbody>
            </spanheader>

        </div>
    );
}

export default News;

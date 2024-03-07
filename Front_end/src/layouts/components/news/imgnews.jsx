import { Image } from "@nextui-org/react";

export default function Imgnews() {
    return (
        <div className=" flex flex-col md:flex-row  gap-20 mt-11 ml-52 mr-52  ">
            <div >
                <a href="">
                    {' '}
                    <Image
                     radius="none"
                     isZoomed
                     width={240}
                        src="/src/assets/imgnews/1.jpg "
                        alt=" "
                        className=" drop-shadow-2xl   "
                    />
                </a>
                <div className=" mt-7 text-xl">
                    <h1>Bài Viết Mẫu</h1>
                </div>
                <div>
                    <span className="flex justify-start mt-2 font-light gap-2  ">
                        <a href="*">
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
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                />
                            </svg>
                        </a>
                        27/09/2017
                        <h1 className=" flex justify-start   gap-3  ">
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
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                />
                            </svg>
                            1 Bình Luận
                        </h1>
                    </span>
                </div>
                <div className="font-light text-left ">
                    <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the rinting and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever sincer they
                        1500s. Nullam id condimentum purus. In...{' '}
                    </p>
                </div>

                <div className="flex justify-start gap-2 mt-2 font-light  text-red-500 ">
                    <a href="/news">Đọc Tiếp</a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3 mt-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>

            <div>
                <a href="">
                    {' '}
                    <Image
                     radius="none"
                     isZoomed
                     width={240}
                        src="/src/assets/imgnews/2.jpg "
                        alt=""
                        className="drop-shadow-2xl"
                    />
                </a>
                <div className=" mt-7 text-xl">
                    <h1>Bài Viết Mẫu 2</h1>
                </div>
                <div>
                    <span className="flex justify-start mt-2 font-light gap-2  ">
                        <a href="*">
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
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                />
                            </svg>
                        </a>
                        27/09/2017
                        <h1 className=" flex justify-start   gap-3  ">
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
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                />
                            </svg>
                            1 Bình Luận
                        </h1>
                    </span>
                    <div className="font-light text-left">
                    <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the rinting and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever sincer they
                        1500s. Nullam id condimentum purus. In...{' '}
                    </p>
                    </div>
                    <div className="flex justify-start gap-2 mt-2 font-light  text-red-500">
                    <a href="/news">Đọc Tiếp</a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3 mt-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <a href="">
                    {' '}
                    <Image
                     radius="none"
                     isZoomed
                     width={240}
                        src="/src/assets/imgnews/3.jpg "
                        alt=""
                        className="drop-shadow-2xl"
                    />
                </a>
                <div className=" mt-7 text-xl">
                    <h1>Bài Viết Mẫu 3</h1>
                </div>
                <div>
                    <span className="flex justify-start mt-2 font-light gap-2  ">
                        <a href="*">
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
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                />
                            </svg>
                        </a>
                        27/09/2017
                        <h1 className=" flex justify-start   gap-3  ">
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
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                />
                            </svg>
                            1 Bình Luận
                        </h1>
                    </span>
                    <div className="font-light text-left">
                    <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the rinting and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever sincer they
                        1500s. Nullam id condimentum purus. In...{' '}
                    </p>
                    </div>
                    <div className="flex justify-start gap-2 mt-2 font-light  text-red-500">
                    <a href="/news">Đọc Tiếp</a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3 mt-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

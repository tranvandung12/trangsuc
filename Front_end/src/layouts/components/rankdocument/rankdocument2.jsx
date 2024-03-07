import { Card } from '../../../components/card/card';

export default function Rankdocument2() {
    const data = [
      {
            id: 1,
            productName: 'Nhẫn Vàng Đặc Biệt',
            price: 400000,
        },
        {
            id: 2,
            productName: 'Nhẫn Tình Nhân',
            price: 900000,
            
        },
        {
            id: 3,
            productName: 'Bông Tai Phá Cách',
            price: 350000,
        },
    ];
    return (
        <div className="flex justify-center gap-6  ">
            <span className="w-60 h-28 bg-gray-200">
                <span className="flex justify-center mt-5">Nhẫn Ngọc Trai</span>

                <span className="flex justify-center text-red-500 mt-2 font-semibold gap-2">
                    <a href="*">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </a>
                  liên hệ
                </span>
            </span>
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

    );
}

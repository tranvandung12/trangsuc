import { Card } from '../../../components/card/card';
export default function Rankdocument6() {
    const data = [
        {
            id: 1,
            productName: 'Vòng Tay Tình Nhân ',
            price: 900999,
        },
        {
            id: 2,
            productName: 'Bông Tai Phá Cách ',
            price: 350000,
            
        },
        {
            id: 3,
            productName: 'Nhận Vòng Basic ',
            price: 700000,
        },
        {
            id: 4,
            productName: 'Dây Chuyền Số 8',
            price: 600000 ,
        },
      
        
       
    ];
    return (
        <div className="flex justify-center gap-6">
        {data &&
            data.map((prd) => (
                <Card
                    key={prd.id}
                    productName={prd.productName}
                    price={`${prd.price.toLocaleString('vi-VN')}đ`}
                />
            ))}
    </div>
    );
}

import { Button } from '@nextui-org/react';

export default function Benner2() {
    return (
        <div
        
            className="img-text-wrapper p-2 "
            style={{ position: 'relative', height: '500px      ' }}
        >
           <img className='w-full mt-5' src="/src/assets/benner/benner2.jpg" alt="" style={{height:"500px"}} />
            <div
                className="text-on-image"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'rgb',
                    textAlign: 'center',
                }}
            >
                <h1 className="text-5xl font-bold">Khuyến mãi khủng mùa hè</h1>

                <p className="mt-5">Giảm đến 50% đối với nhẫn kim cương </p>
                <Button
                    disableRipple
                    className="relative mt-3  overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 
                    after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/90 after:z-[-1] after:transition 
                    after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg"
                >
                    <a href="">Mua ngay</a>
                </Button>
            </div>
        </div>
    );
}

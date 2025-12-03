import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';

export default function FilpLoader() {
    return (
        <div className="h-[800px] flex justify-center items-center flex-col">

            {/* <div className="site_preloader">
    <div className="preload_logoOuter">
        <div className="preload_flip loading">
            <div className="preload_logo logoFront"><Image className="" width='50' height='50' src="/images/meallogo.svg" alt=""/></div>
            <div className="preload_logo logoBack"><Image className="" width='50' height='50' src="/images/meallogo.svg" alt=""/></div>
                </div>
            </div>
        </div> */}

            <div class="c-spinning-loader">
                <div class="c-spinning-loader__circle"></div>
                <Image className="c-spinning-loader__logo" width='60' height='60' src="/images/meallogo.svg" alt="" />
            </div>
            <p className='mt-[30px] text-[#374151] text-[15px] xl:text-[15px] 2xl:text-[15px] 3xl:text-[0.781vw] font-normal'>Please wait...</p>
        </div>
    );
}

/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

function Banner() {
    return (
        <div className= "relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image 
            src= "https://i.pinimg.com/originals/d1/00/20/d1002024ab2316ef6b67f55e0670d233.jpg"
            layout = "fill"
            objectFit = "cover"
            />
            <div className="absolute top-1/2  w-full text-center">
                <p className = "text-xl sm:text-4xl text-white font-semibold "> Not sure where to go? Perfect.</p> 
                <button className= "text-purple-500 bg-white px-10 py-4 shadow-md rounded-full duration-150 font-bold my-3 hover:shadow-xl active:scale-90">
                    Flexible?
                </button>
            </div>
        </div>      
    )
}

export default Banner;


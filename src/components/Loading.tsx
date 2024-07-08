"use client"
function Loading() {
    return (
        <div className='absolute bg-gray-500/60 top-0 bottom-0 right-0 left-0 w-full min-h-screen flex flex-col justify-center items-center '>
            {/* <Image src={LoadingSVG} alt="Loading" height={200} width={200} className="absolute z-[999]" /> */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
    )
}

export default Loading
import img1 from '../../assets/images/demo.jpg'

const SellerDetails = () => {
    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className='text-[20px] font-bold mb-3'>Seller Details</h1>
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="w-full flex flex-wrap text-[#d0d2d6]">
                    <div className="w-3/12 flex justify-center items-center py-3">
                        <div>
                            <img className='w-full h-[230px]' src={img1} alt="" />
                        </div>

                    </div>
                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2  text-lg'>
                                <h2>Basic Info</h2>
                            </div>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-[#9D9CED] rounded-md'>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Name : </span>
                                    <span>Pantho Mashreky</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Email : </span>
                                    <span>panthomashreky6@gmail.com</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Role : </span>
                                    <span>Seller</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Status : </span>
                                    <span>Active</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Payment Status : </span>
                                    <span>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SellerDetails;
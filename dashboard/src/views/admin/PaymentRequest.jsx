import {FixedSizeList as List} from "react-window"
const PaymentRequest = () => {
    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
                <h2 className="text-xl font-medium pb-5 text-[#d0d2d6]">Withdrawal Request</h2>

                <div className="w-full">
                        <div className="w-full overflow-x-auto">
                            <div className="flex bg-[#A7A6DF] uppercase text-xs font-bold min-w-[340px] rounded-md">
                                <div className="w-[25%] p-2">
                                    no
                                </div>
                                <div className="w-[25%] p-2">
                                    amount
                                </div>
                                <div className="w-[25%] p-2">
                                    status
                                </div>
                                <div className="w-[25%] p-2">
                                    date
                                </div>
                                <div className="w-[25%] p-2">
                                    action
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentRequest;
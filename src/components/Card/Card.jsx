import { Activity } from "react";
import toast from "react-hot-toast";
import "./Card.css";

const Card = ({ data }) => {
    const { form, bankName } = data;
    const { cardNumber, cvv2, monthExDate, yearExDate } = form;    
    
    const copyToClipboard = (cardNumber) => {
        navigator.clipboard.writeText(cardNumber);
        toast.success("شماره کارت با موفقیت کپی شد");
    }

    return (
        <div className="bg-sky-500 rounded-lg flex flex-col justify-center items-center gap-y-4 py-6 px-8 text-slate-300 w-full shadow-xl">
            <Activity mode={bankName ? "visible" : "hidden"}>
                <span className="text-white self-end font-danaBold">
                    {bankName}
                </span>
            </Activity>
            <label className="input">
                شماره کارت :
                <input
                    className="cursor-pointer"
                    type="text"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                    value={cardNumber}
                    readOnly
                    onClick={() => copyToClipboard(cardNumber)}
                />
            </label>
            <div className="flex justify-between items-center gap-x-10">
                <label className="input">
                    cvv2 :
                    <input
                        type="text"
                        placeholder="****"
                        value={cvv2}
                        disabled
                    />
                </label>
                <label className="input">
                    تاریخ انقضاء :
                    <div className="flex justify-start items-center gap-x-3">
                        <input
                            type="text"
                            placeholder="**"
                            value={monthExDate}
                            disabled
                        />
                        /
                        <input
                            type="text"
                            placeholder="**"
                            value={yearExDate}
                            disabled
                        />
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Card;

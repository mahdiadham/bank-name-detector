import { useId } from "react";
import "./Form.css";

const Form = ({ data }) => {
    const { form, bankNameDetector, handleClear, handleChange, handleSubmit, isLoading } = data;
    const { cardNumber, cvv2, monthExDate, yearExDate } = form;

    const cardNumberID = useId();
    const cvv2ID = useId();
    const monthExID = useId();
    const yearExID = useId();

    return (
        <form className="w-full flex flex-col justify-center items-center gap-y-4">
            <label htmlFor={cardNumberID} className="form-input">
                شماره کارت :
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                    value={cardNumber}
                    onChange={(e) => {
                        handleChange(e)
                        bankNameDetector(e);
                    }}
                    id={cardNumberID}
                    name={"cardNumber"}
                    maxLength={16}
                />
            </label>
            <label htmlFor={cvv2ID} className="form-input">
                cvv2 :
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder="****"
                    value={cvv2}
                    onChange={handleChange}
                    id={cvv2ID}
                    name={"cvv2"}
                    maxLength={4}
                />
            </label>
            <div className="flex justify-between items-center gap-x-4 w-full">
                <label htmlFor={monthExID} className="form-input">
                    ماه انقضاء :
                    <input
                        type="text"
                        inputMode="numeric"
                        placeholder="**"
                        value={monthExDate}
                        onChange={handleChange}
                        id={monthExID}
                        name={"monthExDate"}
                        maxLength={2}
                    />
                </label>
                <label htmlFor={yearExID} className="form-input">
                    سال انقضاء :
                    <input
                        type="text"
                        inputMode="numeric"
                        placeholder="**"
                        value={yearExDate}
                        onChange={handleChange}
                        id={yearExID}
                        name={"yearExDate"}
                        maxLength={2}
                    />
                </label>
            </div>
            <div className="w-full flex justify-between items-center gap-x-2 mt-2">
                <button
                    type="button"
                    className="bg-red-500 !w-1/2 btn"
                    onClick={handleClear}
                >
                    انصراف
                </button>
                <button
                    type="button"
                    className={`bg-sky-600 btn ${isLoading && "bg-slate-300 !text-slate-600"}`}
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    تایید و پرداخت
                </button>
            </div>
        </form>
    );
}

export default Form;

import { useState } from "react";
import toast from "react-hot-toast";
import data from "./data/data.json";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import ToolTips from "./components/ToolTips/ToolTips";
import formSchema from "./validators/FormValidator";

const App = () => {
  const initialFormValue = {
    cardNumber: "",
    cvv2: "",
    monthExDate: "",
    yearExDate: ""
  }

  const [form, setForm] = useState(initialFormValue);
  const [bankName, setBankName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClear = () => {
    setForm(initialFormValue);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const bankNameDetector = () => {
    if (form?.cardNumber?.length < 6) {
      setBankName("");
      return;
    }

    const detectedCardNumber = form?.cardNumber?.slice(0, 6);
    const bankName = data?.banksName?.[detectedCardNumber];

    bankName ? setBankName(bankName) : toast.error("شماره کارت نامعتبر است");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    toast.loading("درحال بررسی اطلاعات", {
      position: "top-center"
    });

    const result = formSchema.safeParse(form);

    setTimeout(() => {
      if (!result.success) {
        toast.error(result.error.issues[0].message, {
          position: "top-center",
        });
        setIsLoading(false);
        return;
      }

      if (!bankName) {
        toast.error("شماره کارت معتبر نمی‌باشد", {
          position: "top-center",
        });
        setIsLoading(false);
        return;
      }

      toast.success("پرداخت وجه با موفقیت انجام شد", {
        position: "top-center",
      });

      setIsLoading(false);
    }, 4000);
  }

  return (
    <main>
      <div className="container mt-8">
        <div className="flex flex-col justify-center items-center gap-y-6 bg-white rounded-2xl border border-slate-200 shadow-xl p-6 w-120 max-sm:w-auto">
          <Card
            data={{
              form,
              bankName
            }}
          />
          <Form
            data={{
              form,
              handleChange,
              bankNameDetector,
              handleClear,
              handleSubmit,
              isLoading
            }}
          />
          <ToolTips {...data} />
        </div>
      </div>
    </main>
  );
};

export default App;

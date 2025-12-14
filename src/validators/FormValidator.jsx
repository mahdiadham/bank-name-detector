import * as z from "zod";

const formSchema = z.object({
    cardNumber: z
        .string({
            required_error: "فیلد شماره کارت الزامی میباشد"
        })
        .min(1, "فیلد شماره کارت الزامی میباشد")
        .regex(/^\d{16}$/, "شماره کارت باید دقیقاً 16 رقم عددی باشد")
    ,
    cvv2: z
        .string({
            required_error: "فیلد cvv2 الزامی میباشد"
        })
        .min(1, "فیلد cvv2 الزامی میباشد")
        .regex(/^\d{3,4}$/, "cvv2 باید 3 یا 4 رقم عددی باشد")
    ,
    monthExDate: z
        .string({
            required_error: "فیلد ماه انقضاء الزامی میباشد"
        })
        .min(1, "فیلد ماه انقضاء الزامی میباشد")
        .regex(/^(0[1-9]|1[0-2])$/, "ماه انقضاء باید بین 01 تا 12 باشد")
    ,
    yearExDate: z
        .string({
            required_error: "فیلد سال انقضاء الزامی میباشد"
        })
        .min(1, "فیلد سال انقضاء الزامی میباشد")
        .regex(/^\d{2}$/, "سال انقضاء باید 2 رقم باشد")
});

export default formSchema;

import { useState } from "react";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const { name, email, number, message } = dataForm;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      emailjs.send(
        "service_yi23occ",
        "template_za1768c",
        {
          from_name: name,
          to_name: "Movie Magic",
          from_email: email,
          to_email: "liebedeveloping69@gmail.com",
          from_number: number,
          message: message,
        },
        "FlsqPbTA_DGRMS2BJ"
      );
      setLoading(false);
      setDataForm({
        name: "",
        email: "",
        number: "",
        message: "",
      });
      toast.success("پیام ارسال شد. در اسرع وقت پیام شما پاسخ داده خواهد شد!");
    } catch (error) {
      toast.error("خطا! پیام شما ارسال نشد");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="font-iransans w-full">
      <h2 className="text-center text-2xl font-semibold">تماس با ما</h2>
      <div className="flex justify-center items-center mb-10 mt-3">
        <div className="w-[1px] h-[1px] min-w-[90px] bg-orange-500" />
      </div>
      <div className="flex gap-5 w-full">
        <div className="relative flex flex-1 items-center">
          <AiOutlineUser className="absolute right-2 w-6 h-6 dark:text-slate-200 text-primary" />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="نام شما"
            className="contact-form-input"
          />
        </div>
        <div className="relative flex flex-1 items-center my-4">
          <AiOutlinePhone className="absolute right-2 w-6 h-6 dark:text-slate-200 text-primary" />
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="شماره تماس"
            className="contact-form-input"
          />
        </div>
      </div>
      <div className="relative flex items-center">
        <MdOutlineEmail className="absolute right-2 w-6 h-6 dark:text-slate-200 text-primary" />
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
          placeholder="ایمیل خود را وارد نمایید"
          className="contact-form-input"
        />
      </div>
      <textarea
        name="message"
        value={message}
        required
        onChange={handleChange}
        rows="10"
        className="my-4 contact-form-input"
        placeholder="پیام"
      ></textarea>
      <button
        type="submit"
        className="dark:bg-[#f1f1f1] dark:bg-opacity-10 dark:hover:bg-black dark:hover:bg-opacity-50 transition duration-300 ease-in-out py-3 px-8 rounded-xl outline-none w-fit bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg dark:shadow-primary"
      >
        {loading ? "در حال ارسال..." : "ارسال"}
      </button>
    </form>
  );
};

export default ContactForm;

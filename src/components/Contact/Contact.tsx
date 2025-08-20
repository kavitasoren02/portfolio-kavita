import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import SectionWrapper from "../../hoc/SectionWrapper";
import { slideIn } from "../../utils/motion";
import { type ContactProps, contactProps } from "../../constants";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactProps>(contactProps);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/send/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Email Sent Successfully!");
        setForm(contactProps);
      } else {
        alert("Failed to send email. Try again");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-white`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="bg-[#151030] py-4 pl-3 placeholder:text-[#aaa6c3] text-white rounded-lg border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#151030] py-4 pl-3 placeholder:text-[#aaa6c3] text-white rounded-lg border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="bg-[#151030] py-4 px-6 placeholder:text-gray-400 text-white rounded-lg border-none font-medium "
            />
          </label>

          <button
            type="submit"
            className="bg-[#151030] text-white py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-[#050816]"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contacts");

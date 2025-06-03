import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {

 const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_cmb7h5u",     // ← استبدله بمعرف الخدمة
      "template_uicl8qb",    // ← استبدله بمعرف القالب
      formData,
      "OQOEDYzgovUBv4HDB"      // ← استبدله بالمفتاح العام
    ).then(
      () => {
        alert(" Done Successfully 😁👍");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error(error);
        alert("Something went wrong 😢 , Please check your email and other inputs ❤️ ");
      }
    );
  };

  return (
    <div id='contact' className="max-w-3xl mx-auto bg-sky-900 shadow-lg rounded-2xl p-6 flex flex-col gap-8 my-10">
  {/* قسم الفورم */}
  <div>
    <h2 className="text-2xl font-serif font-bold text-white-50 text-center mb-4">
      Contact Me
    </h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="bg-gray-400 text-black p-3 rounded-lg placeholder-black-50"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="bg-gray-400 text-black p-3 rounded-lg placeholder-black-50"
        required
      />
      <textarea
        name="message"
        placeholder="Your comment"
        value={formData.message}
        onChange={handleChange}
        className="bg-gray-400 text-black p-3 h-24 rounded-lg placeholder-black-50"
        required
      />
      <button
        type="submit"
        className="rounded-xl bg-blue-950 text-white hover:bg-blue-900 hover:scale-95 transition p-3 hover:cursor-pointer"
      >
        Send
      </button>
    </form>
  </div>

  {/* قسم الروابط في الأسفل */}
  <div className="flex justify-center items-center gap-8 flex-wrap border-t pt-4">
    <a
      href="mailto:braaalshoumary5@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-lg text-black font-serif hover:text-blue-600"
    >
      <FaEnvelope />
      Gmail
    </a>

    <a
      href="https://github.com/Braa8"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-lg text-black font-serif hover:text-blue-600"
    >
      <FaGithub />
      Github
    </a>

    <a
      href="https://linkedin.com/in/braa-alshoumary"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-lg text-black font-serif hover:text-blue-600"
    >
      <FaLinkedin />
      LinkedIn
    </a>
  </div>
</div>


  )
}

export default Contact

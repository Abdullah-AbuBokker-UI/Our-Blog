import React, { FC } from "react";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import "@/app/assets/scss/__Contact.scss";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import Navbar from "../components/header/Navbar";
import Center from "../ui/Center";
import Footer from "../ui/Footer";

interface contact {}

const Contact: FC<contact> = () => {
  return (
    <>
      <Navbar />
      <Center>
        <div className="contact">
          <div className="my-10 px-3">
            <h1>Get in Touch</h1>
            <h6>
              Contact us to publish your content and show ads to our website and
              get a good reach.
            </h6>
          </div>
          <div className="contact-item px-3">
            <div className="item">
              <FaHome className=" bg-blue-700 text-white p-2 rounded-full w-[40px] h-[40px]" />
              <h2>Office</h2>
              <p>Victoria Street, London, UK</p>
            </div>
            <div className="item">
              <MdEmail className=" bg-blue-700 text-white p-2 rounded-full w-[40px] h-[40px]" />
              <h2>Email</h2>
              <p>info.support@gmail.com</p>
            </div>
            <div className="item">
              <MdLocalPhone className=" bg-blue-700 text-white p-2 rounded-full w-[40px] h-[40px]" />
              <h2>Phone</h2>
              <p>+8801721902369</p>
            </div>
          </div>
          <div className="service-map">
            <iframe
              className="max-w-[1200px] px-3 w-full md:h-[60vh]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29248.67788700499!2d89.82061151363958!3d23.601293817466388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe2534aaa4fc7f%3A0x4daf43ffdb19a28e!2sFaridpur!5e0!3m2!1sen!2sbd!4v1706076377809!5m2!1sen!2sbd"
              style={{ border: 0, zIndex: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form action="" className="contact-form">
            <div className="input">
              <div className="input-name">
                <label htmlFor="">Name</label>
                <Input type={"text"} />
              </div>
              <div className="input-name">
                <label htmlFor="">Email</label>
                <Input type={"email"} />
              </div>
            </div>
            <div className="input">
              <div className="input-name">
                <label htmlFor="">Phone</label>
                <Input type={"number"} />
              </div>
              <div className="input-name">
                <label htmlFor="">Subject</label>
                <Input type={"text"} />
              </div>
            </div>
            <div className="input-area">
              <label htmlFor="">Message</label>
              <TextArea rows={3} />
            </div>
            <Button
              text="Send Message"
              type={"submit"}
              className="flex justify-center items-center mx-auto border rounded-md px-4 py-3 bg-[#7C4EE4] text-white text-sm"
            />
          </form>
        </div>
      </Center>
      <Footer />
    </>
  );
};

export default Contact;

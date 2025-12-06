import React from "react";
import sms from "../assets/sms.png";

function Contact() {
  return (
    <>
      <h1 className="text-6xl font-bold text-center my-2 text-cyan-400">
        Contact Me
      </h1>
      <div className="flex  flex-row">
        {/* //left side */}
        <div>
          <form className="space-y-5 mt-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#2a2a2a] p-4 rounded-lg text-gray-200
                       focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#2a2a2a] p-4 rounded-lg text-gray-200
                       focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-[#2a2a2a] p-4 rounded-lg text-gray-200
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            />

            <button
              type="submit"
              className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg
                       hover:bg-cyan-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* right side */}
        <div>
          <img src={sms} alt="" />
        </div>
      </div>
    </>
  );
}

export default Contact;

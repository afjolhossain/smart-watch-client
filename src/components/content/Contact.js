import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <p className="text-2xl font-bold text-center "></p>
      <p className="text-3xl font-bold text-center mt-10">
        <span>
          WELCOME <br />
          <span className="mr-2 text-red-300">TO</span>
        </span>
        <br />
        SMART <span className="text-green-600">WATCH</span>
      </p>

      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10  mx-auto">
        <form className="form w-11/12 leading-8 ">
          <label className="mx-10">NAME</label>
          <input
            className="w-10/12 h-10 mx-10 bg-zinc-200"
            type="text"
            name="customerName"
            placeholder="Your Name"
            id=""
          />
          <label className="mx-10 ">EMAIL</label>
          <input
            className="w-10/12 h-10 mx-10 bg-zinc-200"
            type="email"
            name="email"
            placeholder="Your Email"
            id=""
          />
          <label className="mx-10">MESSAGE</label>
          <textarea
            className="w-10/12 h-20 mx-10 bg-zinc-200 "
            name="message"
            id=""
            placeholder="YOUR MESSAGE"
          ></textarea>
          <input
            className="w-6/12 h-10 mx-10 bg-zinc-200"
            type="submit"
            name=""
            id=""
          />
        </form>

        <div className="w-10/12 mb-6 h-full rounded-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 h-96 mx-auto">
          <h1 className="mt-32 text-3xl text-white bold">
            Start 15 day Free Trial
          </h1>
          <input
            className="w-7/12 h-10 mx-auto bg-zinc-200"
            type="email"
            name="email"
            placeholder="Your Email"
            id=""
          />
          <input
            className="w-2/12 ml-4 h-10 mx-auto bg-zinc-200"
            type="submit"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

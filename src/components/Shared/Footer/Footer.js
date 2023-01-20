import React from "react";
import "./Footer.css";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className=" bg-footer px-auto text-white">
      <div className="grid md:grid-cols-4 gap-2  sm:grid-cols-2 p-16 leading-8	">
        <div>
          <h1>Watch Company</h1>
          <p>
            Sed congue nisl dolorSed congue nisl dolor, id dapibus leo elementum
            posuere.Sed congue nisl dolorSed congue nisl dolor, id dapibus leo.
            Sed congue nisl dolorSed congue ni
          </p>
        </div>
        <div className="ml-10">
          <h1>Address</h1>
          <div className="flex items-center hover">
            <HomeIcon className="h-6 w-6 text-white-500"></HomeIcon>
            <p className="ml-2">22/A,Golapgonj,sylhet</p>
          </div>
          <div className="flex items-center hover">
            <PhoneIcon className="h-6 w-6 text-white-500"></PhoneIcon>
            <p className="ml-2">01741147273</p>
          </div>
          <div className="flex items-center hover">
            <EnvelopeIcon className="h-6 w-6 text-white-500"></EnvelopeIcon>
            <p className="ml-2">afjolhossain020@gmail.com</p>
          </div>
        </div>
        <div>
          <h1>Support Links</h1>
          <div className="flex items-center hover">
            <ChevronRightIcon className="h-4 w-4 text-white-500"></ChevronRightIcon>
            <p className="ml-1">Our FAQ</p>
          </div>
          <div className="flex items-center hover">
            <ChevronRightIcon className="h-4 w-4 text-white-500"></ChevronRightIcon>
            <p className="ml-1">Our services</p>
          </div>
          <div className="flex items-center hover">
            <ChevronRightIcon className="h-4 w-4 text-white-500"></ChevronRightIcon>
            <p className="ml-1">Portfolio</p>
          </div>
          <div className="flex items-center hover">
            <ChevronRightIcon className="h-4 w-4 text-white-500"></ChevronRightIcon>
            <p className="ml-1">Apps Download</p>
          </div>
        </div>
        <div>
          <h1>Follow Us</h1>
          <p>
            Sed congue nisl dolorSed congue nisl dolor, id dapibus leo elementum
            posuere.
          </p>

          <div className="flex">
            <div className="link-icon">
              <a href="https://www.facebook.com/" target="_blank ">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="link-icon">
              <a
                href="https://www.linkedin.com/in/afjol-hossain/"
                target="_blank "
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="link-icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="link-icon">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

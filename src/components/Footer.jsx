import React from "react";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
  iconYoutube,
  logoWhite,
} from "../assets";

const Icon = ({ icon, description }) => {
  return (
    <a href="#">
      <img src={icon} alt={description} className="h-8" />
    </a>
  );
};

const QuickLinks = () => {
  return (
    <div>
      <h5 className="text-brightRedLight mb-2 font-bold">Quick Links</h5>
      <div className="flex flex-col space-y-1">
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Industries Served
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Insights
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Case Studies
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Contact
        </a>
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div>
      <h5 className="text-brightRedLight mb-2 font-bold">Quick Links</h5>
      <div className="flex flex-col space-y-1">
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Contact Us
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          About Us
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Careers
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <h5 className="text-brightRedLight mb-2 font-bold">Services</h5>
      <div className="flex flex-col space-y-1">
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          AI
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Cloud
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Cyber Security
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Smart Application
        </a>
        <a href="#" className="hover:text-brightRed text-brightRedSupLight">
          Strategic Consulting
        </a>
      </div>
    </div>
  );
};

const LogoSocialMedia = () => {
  return (
    <div>
      {/* Login and Social Links Container */}
      <div className="md:flex-row flex flex-col-reverse items-center justify-between space-y-8 p-8">
        <div className="md:hidden text-gray-400">
          Copyright &copy; 2022, All Rights Reserved
        </div>
        <Icon icon={logoWhite} description={"logoWhite"} />
        <div className="flex justify-center space-x-4">
          <Icon icon={iconFacebook} description={"iconFacebook"} />
          <Icon icon={iconTwitter} description={"iconTwitter"} />
          <Icon icon={iconYoutube} description={"iconYoutube"} />
          <Icon icon={iconInstagram} description={"iconInstagram"} />
          <Icon icon={iconYoutube} description={"iconYoutube"} />
          <Icon icon={iconPinterest} description={"iconPinterest"} />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="md:justify-start md:space-x-12 mx-auto flex items-start justify-center space-x-8 p-4">
        <QuickLinks />
        <Services />
        <Company />
      </div>
      <LogoSocialMedia />
    </footer>
  );
};

export default Footer;

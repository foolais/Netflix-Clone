import React from "react";
import LanguagePicker from "./LanguagePicker";

const Footer = () => {
  return (
    <div className="text-[#737373] w-4/5 mx-auto py-10 ">
      <p className="mt-10 mb-4">Questions? Call 007-803-321-2130</p>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p>FAQ</p>
          <p>Media Center</p>
          <p>Redeem Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
          <p>Legal Notices</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Help Center</p>
          <p>Investor Relations</p>
          <p>Buy Gift Cards</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <p>Only on Netflix</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Account</p>
          <p>Jobs</p>
          <p>Ways to Watch</p>
          <p>Cookie Preferences</p>
          <p>Speed Test</p>
        </div>
      </div>
      <LanguagePicker />
      <p className="mt-8">Netflix Indonesia</p>
    </div>
  );
};

export default Footer;

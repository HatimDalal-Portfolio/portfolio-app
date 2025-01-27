import React from "react";
import { CONTACT } from "../constants";

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <div className="my-4 flex gap-4 justify-center">
          <a href="tel:+971557879441" className="block">
            {CONTACT.phoneNo}
          </a>
          <span>/</span>
          <a href="tel:+918169458182" className="block">
            {CONTACT.phoneNo1}
          </a>
        </div>

        <a href="mailto:dalalhatim1316@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

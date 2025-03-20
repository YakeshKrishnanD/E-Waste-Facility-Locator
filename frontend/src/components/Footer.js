import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 p-6 mt-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="font-bold text-xl">ELocate</h2>
          <p className="text-gray-700">Transforming E-Waste Management.</p>
        </div>
        <div>
          <h3 className="font-semibold">Our Services</h3>
          <p>Smartphone Recycle</p>
          <p>Laptop Recycle</p>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <p>About us</p>
          <p>Education</p>
        </div>
        <div>
          <h3 className="font-semibold">Contact Us</h3>
          <p>📍 Aurangabad, Maharashtra</p>
          <p>📞 +919234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

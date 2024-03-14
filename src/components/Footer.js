import React from "react";


const Footer = () => {
  return (
    <footer className="bg-blue-600 py-4 bottom-0 w-full relative">
      <div className="container mx-auto text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Weilders. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

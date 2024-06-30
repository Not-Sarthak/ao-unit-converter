import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const Footer = () => {
  const [show, setShow] = useState(false);
  return (
    <footer className="py-4 absolute bottom-0 grid place-items-center left-0 w-full px-8">
      <p className="text-gray-600 lg:divide-x divide-gray-700 tracking-tight text-center">
        <span className="pr-2 inline-block">&copy; copyright 2024 </span>
        <span className="inline-block pl-2">
          made by{" "}
          <a
            className="hover:text-white transition-colors duration-400"
            href={`https://github.com/Not-Sarthak/`}
            target="_blank"
            rel="noreferrer"
            onMouseOut={() => setShow(false)}
            onMouseOver={() => setShow(true)}
          >
            <RoughNotation
              type="underline"
              show={show}
              strokeWidth={3}
              animationDuration={400}
              animationDelay={0}
              color="rgb(135, 206, 235, 0.8)"
            >
              <span>sarthak</span>
            </RoughNotation>{" "}
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;

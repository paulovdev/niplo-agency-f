"use client";

import Link from "next/link";
import { useState } from "react";

const SectionText = ({ text, src, linkText, linkBol, marginBottom }) => {
  const [isLinkActive, setIsLinkActive] = useState(linkBol);

  return (
    <div
      className="w-full mb-[2.5rem] flex items-center justify-between gap-[2rem] select-none pointer-events-none"
      style={{ marginBottom: marginBottom }}
    >
      <h2 className="font-general text-color text-[.9rem] tracking-[-.5px] font-[500] uppercase ">
        {text}
      </h2>
      {isLinkActive && (
        <Link
          className="w-fit h-fit px-[1.3rem] py-[.3rem] border border-border rounded-[2rem] flex justify-center items-center select-auto pointer-events-auto"
          href={src}
        >
          <span className="font-general text-center text-color text-[.75rem] tracking-[-.1px] font-[500] uppercase">
            {linkText}
          </span>
        </Link>
      )}
    </div>
  );
};

export default SectionText;

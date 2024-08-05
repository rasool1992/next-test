"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  function handleClick() {
    !name ? setName("Ali") : setName("");
  }
  return (
    <>
      <div className="flex flex-col gap-4 relative">
        <button
          className="outline outline-red-400 outline-2"
          onClick={handleClick}
        >
          Click
        </button>
        {name && <div className="absolute top-[110%] left-[30%]">{name}</div>}
      </div>
    </>
  );
}

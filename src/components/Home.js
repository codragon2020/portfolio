import React, { useState, useEffect } from "react";
import image from "../images/green-tech-11.jpg";
import portImage from "../images/portImage.jpg";

export default function Home() {
  const [clientWidth, setclientWidth] = useState(document.body.clientWidth)
  useEffect(() => {
    const changeBackground = () => {
      console.log(document.body.clientWidth);

      setclientWidth(document.body.clientWidth)
    } 
    window.addEventListener("resize", changeBackground);

  }, [])
  return (
    <main>
      <img
        src={clientWidth > 1159 ? image : portImage}
        alt="Tech Background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 pt-64 px-30">
        <h1
          className={
            clientWidth > 1159
              ? "lg:text-9xl text-6xl font-bold leading-none cursive lg:leading-snug text-center text-green-900"
              : "lg:text-9xl text-6xl font-bold leading-none cursive lg:leading-snug text-center text-white"
          }
        >
          Hello! Welcome to my site.
        </h1>
      </section>
    </main>
  );
}

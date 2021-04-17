import React from "react";
import image from "../images/green-tech-11.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Tech Background"
        className="absolute object-cover w-full h-full lg:pt-0"
      />
      <section className="relative flex justify-center min-h-screen pt-12 pt-64 px-30">
        <h1 className="lg:text-9xl text-6xl text-green-900 font-bold cursive leading-none lg:leading-snug">
          Hello! I'm Jason.
        </h1>
      </section>
    </main>
  );
}

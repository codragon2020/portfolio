import React from "react";

export default function Contact() {
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Jason McGinthy's <br></br>Contact Information
        </h1>
        <br></br>
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col text-2xl ">
            <li>Email: jasonmcginthy@gmail.com</li>
            <li>Phone: 804-389-0908</li>
            <li className="text-green-600 hover:text-blue-800">
              <a
                href="https://drive.google.com/file/d/1VU7L00X-2CwBd74S3RpmNdkKifcUPNGg/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

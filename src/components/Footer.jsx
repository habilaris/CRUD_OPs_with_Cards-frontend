import React from "react";

function Footer() {
  return (
    <div className="bg-neutral-200 flex flex-col">
      <div className="py-8 md:px-15 px-10 flex flex-col flex-wrap gap-10 md:flex-row justify-between md:items-center shadow-[0_-12px_18px_rgba(46,46,46,0.1)] w-full text-neutral-700 ">
        <div className="md:w-100">
          <h2 className="text-2xl font-bold">CRUD Ops With Cards</h2>
          <p className="mb-2 my-4">
            This is a CRUD App for an Admins to maintain their data of users on
            their app.
          </p>
          <p>
            <b>Tech Stack Used:</b> <br /> React, Node, Express, Mongo,
            Mongoose, Tailwind & React Router.
          </p>
        </div>
        <div className="md:w-100">
          <h4 className="text-2xl font-semibold mb-2">My Socials:</h4>
          <p className="mb-2">
            See more of my content at: <br />
            <a
              href="https://linkedin.com/in/habilaris"
              className="text-cyan-800 transition-all duration-300 ease-out hover:text-cyan-950 "
            >
              Linkedin/in/habilaris
            </a>
          </p>
          <p>
            Don't forget to follow me on Instagram:
            <br />
            <a
              href="https://instagram.com/habilaris"
              className="text-cyan-800  transition-all duration-300 ease-out hover:text-cyan-950 "
            >
              Instagram/@habilaris
            </a>
          </p>
        </div>
        <div className="md:w-100">
          <h4 className="text-2xl font-semibold mb-2">Github Repo:</h4>
          <p className="mb-2">
            Visit the frontend github repo for this project at: <br />
            <a
              href="https://github.io/habilaris/CRUD_OPs_with_Cards-frontend"
              className="text-cyan-800 transition-all duration-300 ease-out hover:text-cyan-950 "
            >
              CRUD OPs with Cards Frontend
            </a>
          </p>
          <p>
            Visit the backend github repo for this project at: <br />
            <a
              href="https://github.io/habilaris/CRUD_OPs_with_Cards-backend"
              className="text-cyan-800  transition-all duration-300 ease-out hover:text-cyan-950 "
            >
              CRUD OPs with Cards Backend
            </a>
          </p>
        </div>
      </div>
      <hr className="w-[90vw] md:w-[80vw] rounded text-neutral-400 self-center" />
      <p className="text-center py-4 text-neutral-600 px-10">
        Developed by Habil Aris in 2026 | All rights are reserved &copy;.
      </p>
    </div>
  );
}

export default Footer;

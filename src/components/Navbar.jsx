import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false)

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'resume' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'contact' },
  ]
  return (
    <div className="flex  justify-around gap-20 items-center w-full h-20 bg-primary fixed text-white">
      <h1 className="text-4xl font-signature capitalize px-5 text-accent">
        anil shrestha
      </h1>

      <ul className=" hidden md:flex md:space-x-8 md:px-4 ">
        {links.map((item) => (
          <li
            key={item.id}
            className="text-gray-300 text-lg hover:scale-110 hover:text-accent cursor-pointer duration-200 capitalize"
          >
            <Link to={item.link} smooth duration={500}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((item) => (
            <li
              key={item.id}
              className="text-gray-400 hover:scale-110 cursor-pointer duration-200 capitalize text-2xl py-5"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={item.link}
                smooth
                duration={500}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar

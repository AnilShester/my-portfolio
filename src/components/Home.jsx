import React from 'react'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { FaBirthdayCake } from 'react-icons/fa'
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import profile from '../assets/hero.jpg'
import cv from '../assets/portfolio/CV.pdf'

import frontend from '../assets/icons/front-end.png'
import python from '../assets/icons/python.png'
import technology from '../assets/icons/processor.png'
import webDesign from '../assets/icons/ux.png'

function Home() {
  const skills = [
    {
      id: 1,
      skill: 'FrontEnd Development',
      description: 'Html/Css/JavaScript/React',
      image: frontend,
    },
    {
      id: 2,
      skill: 'Python Programming',
      description: 'Python/Django',
      image: python,
    },
    {
      id: 3,
      skill: 'UI/UX Design',
      description: 'Figma',
      image: webDesign,
    },
    {
      id: 4,
      skill: 'Micro-soldering',
      description: 'Micro-soldering',
      image: technology,
    },
  ]

  return (
    <div name="home" className=" pt-20 w-full text-white md:text-xl md:flex ">
      <section className=" pt-20  flex flex-col items-center bg-primary md:px-10 md:w-6/12 md:mt-30 lg:w-6/12 xl:w-4/12">
        <div className="flex flex-col items-center">
          <img src={profile} alt="" className="max-h-80 rounded-lg" />
          <h3 className="text-3xl font-bold mt-5">Anil Shrestha</h3>
          <h2 className="py-2 px-4 bg-secondary rounded-lg mt-2 text-white">
            FrontEnd Developer
          </h2>
          <div className="flex text-5xl space-x-3 my-2">
            <a href="https://www.facebook.com">
              <AiFillFacebook className="p-2" />
            </a>
            <a href="https://github.com/AnilShester">
              <AiFillGithub className="p-2" />
            </a>
            <a href="https://www.linkedin.com/in/anil-shrestha-08474b106/">
              <AiFillLinkedin className="p-2" />
            </a>
            <a href="https://mail.google.com/mail">
              <AiFillMail className="p-2" />
            </a>
          </div>
        </div>
        <div className="bg-secondary w-11/12 p-5 rounded-2xl ">
          <div className="flex items-center  gap-x-2  border-b-2 border-b-gray-500 my-2 py-2">
            <AiFillFacebook className="text-5xl py-1" />
            <div className="flex flex-col">
              <p className="text-sm text-accent">Phone</p>
              <p>+358 456 488 274</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 border-b-2 border-b-gray-500 my-2 py-2">
            <AiFillMail className="text-5xl p-1" />
            <div className="flex flex-col">
              <p className="text-sm text-accent">Email</p>
              <p className="break-all">AnilShrestha645@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 border-b-2 border-b-gray-500 my-2 py-2">
            <GoLocation className="text-5xl p-1 " />
            <div className="flex flex-col">
              <p className="text-sm text-accent">Location</p>
              <p>Helsinki</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <FaBirthdayCake className="text-5xl p-1" />
            <div className="flex flex-col">
              <p className="text-sm text-accent">Birthday</p>
              <p>29 Dec, 1994</p>
            </div>
          </div>
        </div>
        <div className="m-4 flex flex-col w-10/12">
          <a href={cv} download="Resume">
            <button className=" flex items-center my-3 w-full hover:border-2 hover:border-white gap-x-2 py-3 px-5  bg-accent rounded-full ">
              <BsFillCloudDownloadFill />
              Download CV
            </button>
          </a>
          <a href="mailto:anilshrestha645@gmail.com" download="Resume">
            <button className=" flex items-center w-full gap-x-2 py-3 px-5 hover:border-2 hover:border-accent bg-secondary text-accent rounded-full ">
              <AiFillMail />
              Send Email
            </button>
          </a>
        </div>
      </section>
      <section className="p-5 box-content bg-primary md:w-6/12 lg:w-6/12 lg:px-32 md:p-20 md:mt-0 xl:w-8/12">
        <div>
          <h1 className="text-5xl font-semibold ">About Me</h1>
          <p className="mt-4 text-gray-400 text-md">
            I'm a passionate and dedicated front-end developer with a strong
            focus on creating beautiful and functional websites. I have a good
            understanding of HTML, CSS, and JavaScript, and I'm always looking
            to improve my skills and stay up to date with the latest web
            technologies.
          </p>
          <p className="mt-5  text-gray-400 text-md">
            I have a strong eye for detail and a passion for creating clean,
            efficient code. I understand the importance of performance,
            accessibility, and user experience, and I strive to incorporate
            these principles into all of my projects.
          </p>
        </div>
        <div className="mt-5">
          <p className="text-4xl font-semibold mt-10 mb-5">What I do!</p>
          <div className="flex flex-col gap-5">
            {skills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="flex gap-5 items-center px-6 py-4 bg-secondary border-secondary border-2 rounded-lg "
                >
                  <img
                    src={skill.image}
                    alt={skill.description}
                    className="h-20 w-20 "
                  />
                  <div className="break-all">
                    <p className="text-2xl font-semibold">{skill.skill}</p>
                    <p className="text-gray-400 ">{skill.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

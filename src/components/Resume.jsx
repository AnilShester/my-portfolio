import React from 'react'
import react from '../assets/react.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import python from '../assets/python.png'

function Resume() {
  const workingSkills = [
    { id: 1, name: 'CSS', image: css, style: 'shadow-blue-500' },
    { id: 2, name: 'Github', image: github, style: 'shadow-gray-400' },
    { id: 3, name: 'Html', image: html, style: 'shadow-orange-500' },
    { id: 4, name: 'Node JS', image: node, style: 'shadow-green-500' },
    { id: 5, name: 'React', image: react, style: 'shadow-blue-600' },
    {
      id: 6,
      name: 'Javascript',
      image: javascript,
      style: 'shadow-yellow-500',
    },
    {
      id: 7,
      name: 'Tailwind CSS',
      image: tailwind,
      style: 'shadow-sky-400',
    },
    {
      id: 8,
      name: 'Python',
      image: python,
      style: 'shadow-blue-400',
    },
  ]

  const education = [
    {
      id: 1,
      date: '2016-2021',
      degree: 'Bachelor of Engineering in Information Technology',
      university: 'Metropolia University of Applied Sciences',
    },
    {
      id: 2,
      date: '2019-2020',
      degree: 'Python from Scratch',
      university: 'Software Development Academy',
    },
    {
      id: 3,
      date: '2020',
      degree: 'Responsive Web Design',
      university: 'FreecodeCamp',
    },
  ]

  const experience = [
    {
      id: 1,
      date: '07/2020-03-2021',
      position: 'Micro-soldering Specialist',
      company: 'Swappie Oy',
    },
    {
      id: 2,
      date: '03/2021-11-2022',
      position: 'Micro-soldering Coach',
      company: 'Swappie Oy',
    },
  ]

  return (
    <div
      name="resume"
      className=" p-5 mx-auto bg-primary text-white md:p-10 lg:p-20"
    >
      <h1 className="mt-5 text-5xl font-semibold">Resume</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <div>
          <h3 className="text-3xl font-medium mb-5">Education</h3>

          <div className="text-black rounded-lg flex flex-col gap-5">
            {education.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-secondary p-5 rounded-lg flex flex-col gap-2"
                >
                  <p className="text-sm text-accent">{item.date}</p>
                  <p className="text-2xl text-white">{item.degree}</p>
                  <p className="text-lg text-gray-400">{item.university}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="text-3xl font-medium mb-5 mt-5 md:mt-0">Experience</h1>
          <div className="rounded-lg flex flex-col gap-5 text-black">
            {experience.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-secondary p-5 rounded-lg flex flex-col gap-2"
                >
                  <p className="text-sm text-accent">{item.date}</p>
                  <p className="text-2xl text-white">{item.position}</p>
                  <p className="text-lg text-gray-400">{item.company}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h3 className="text-3xl font-medium mb-2">Working Skills</h3>
        <p className="my-5">
          Here are some of the technologies that I have worked with.
        </p>
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4 xl:grid-cols-5">
          {workingSkills.map((skill) => {
            return (
              <div
                key={skill.id}
                className={`${skill.style} hover:scale-110 transition duration-300 ease-in-out  shadow-md max-h-40 gap-2 text-center flex flex-col items-center`}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="max-h-28 pt-2"
                />
                <p className="my-3">{skill.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Resume

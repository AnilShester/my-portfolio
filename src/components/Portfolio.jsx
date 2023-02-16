import { React, useState } from 'react'
import countries from '../assets/portfolio/countries.png'
import dashboadrd from '../assets/portfolio/dashboard.png'
import nabvar from '../assets/portfolio/navbar.jpg'

import todo from '../assets/portfolio/todo.png'
import travel from '../assets/portfolio/travel.png'
import Modal from '../UI/Modal'

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)

  const projects = [
    {
      id: 1,
      name: 'Chrome dashboard extension',
      github: 'https://github.com/AnilShester/chromeDashboardExtension.git',
      image: dashboadrd,
      languages: 'JavaScript, Html, CSS, React, TailwindCss',
      description:
        'Created a chrome dashboard extension using react js. The data for the site was fetched from different sites using API and style using Tailwindcss.',
    },
    {
      id: 2,
      name: 'Countries API',
      github: 'https://github.com/AnilShester/Country-api.git',
      image: countries,
      languages: 'JavaScript, Html, CSS, React',
      description:
        'Creatre a simple countries detail page. Here using react, I created a site to make use of the country API to fetch the data and display in the site. Features like search and pagination are implemented in the project.',
    },
    {
      id: 3,
      name: 'React Todo App',
      github: 'https://github.com/AnilShester/Country-api.git',
      image: todo,
      languages: 'JavaScript, Html, CSS, React',
      description:
        'Created a todo app in react. This project implements different core feature of the react js like hooks and states.',
    },

    {
      id: 4,
      name: 'My travel gernal',
      github: 'https://github.com/AnilShester/my-travel-journal.git',
      image: travel,
      languages: 'JavaScript, Html, CSS, React',
      description:
        'Travel gernal created using react by implementing the core principles and features of react js.',
    },
  ]

  const onHanldeModal = () => {
    setIsOpen(true)
  }

  return (
    <div
      name="portfolio"
      className="bg-primary p-5 mx-auto text-white md:p-10 lg:p-20"
    >
      <h1 className="mt-5 text-5xl font-semibold">Portfolio</h1>
      <p className="my-5">
        Here are some of the projects that I have completed.
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className=" flex flex-col gap-5 p-8 rounded-lg bg-secondary text-center shadow-gray-300 shadow-md"
            >
              <img
                onClick={onHanldeModal}
                src={project.image}
                alt={project.name}
                className=" cursor-pointer rounded-lg h-3/4 hover:scale-105 transition duration-300 ease-in-out"
              />
              <p className="text-lg font-semibold">{project.name}</p>
              <div className="flex justify-around items-center">
                <a
                  href={project.github}
                  className="bg-accent text-white px-5 py-3"
                >
                  Code
                </a>
                <p
                  onClick={onHanldeModal}
                  className="bg-primary px-5 py-3 cursor-pointer"
                >
                  Details
                </p>
              </div>
              <Modal
                name={project.name}
                languages={project.languages}
                github={project.github}
                description={project.description}
                image={project.image}
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                link={'www.github.com'}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio

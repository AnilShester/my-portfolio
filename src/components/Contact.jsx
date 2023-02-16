import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { RiMailSendFill } from 'react-icons/ri'

function Contact() {
  return (
    <div
      name="contact"
      className="bg-primary p-5 mx-auto text-white md:p-10 lg:p-20"
    >
      <h1 className="my-5 text-5xl font-semibold">Contact</h1>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
        <div className="flex flex-col gap-10 items-center lg:w-4/12">
          <div className="px-4 py-6 bg-secondary w-full rounded-lg">
            <h4 className="text-2xl font-semibold flex gap-3 items-center">
              <AiFillPhone className="text-4xl" />
              Phone
            </h4>
            <p className="text-lg text-gray-400 my-2">+358456488274</p>
          </div>
          <div className="px-4 py-6 bg-secondary w-full rounded-lg">
            <h4 className="text-2xl font-semibold flex gap-3 items-center">
              <RiMailSendFill className="text-4xl" />
              Email
            </h4>
            <p className="text-lg text-gray-400 my-2">
              Anilshrestha645@gmail.com
            </p>
            <p className="text-lg text-gray-400">Anilshester@gmail.com</p>
          </div>
        </div>
        <div className="py-8 px-4 text-center bg-secondary rounded-lg mt-10 lg:w-7/12 md:px-10">
          <p className="text-3xl font-semibold">
            I'm always open to dicussing product
          </p>
          <p className="text-2xl py-4 text-accent">
            design work or partnership.
          </p>
          <section>
            <div className=" lg:py-10  mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Me
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Contact me for any open positions or free lancing projects.
              </p>
              <form
                action="https://getform.io/f/68b45a35-5aa0-48ac-9d3b-a032f03738fd"
                className="space-y-8"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-m font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300  text-m text-black rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Email Address"
                    required
                    name="
                  email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-m font-medium "
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Let us know how I can help you"
                    required
                    name="subject"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-m font-medium"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-m text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Leave a comment..."
                    name="message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-m font-medium text-center text-white rounded-lg bg-accent sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                  name="submit"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'

function Modal(props) {
  if (!props.isOpen) return null

  const onHandleClick = (e) => {
    e.target.id === 'modalContainer' && props.closeModal()
  }

  return (
    <div
      onClick={onHandleClick}
      id="modalContainer"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className=" relative w-10/12 xl:w-2/5 lg:w-3/5 md:w-4/5 bg-secondary p-5 text-start rounded-lg">
        <button
          onClick={props.closeModal}
          className="absolute -top-10 -right-0 text-xl rounded-full px-2 border-4 md:-top-8 md:-right-10"
        >
          X
        </button>
        <h1 className="text-center text-3xl font-bold text-accent">
          {props.name}
        </h1>

        <div className="my-5 text-lg lg:grid xl:grid-cols-2 lg:gap-10 ">
          <p>Project: {props.name}</p>
          <p>Languages: {props.languages}</p>
          <p>Code: {props.github}</p>
        </div>
        <p>{props.description}</p>
        <img
          src={props.image}
          alt={props.name}
          className="my-5 rounded-lg shadow-sm shadow-gray-400 "
        />
      </div>
    </div>
  )
}

export default Modal

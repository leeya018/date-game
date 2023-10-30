import React from "react"

import Button from "."

export default function BlueButton({
  children,
  className = "",
  onClick = () => {},
}) {
  return (
    <Button
      className={` border-2 border-white w-96 py-3 
      text-center flex justify-center items-center rounded-md 
      bg-gradient-to-r from-blue_modal_but1 via-blue_dark to-green ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

import React from "react"

import Button from "."

export default function LoginButton({
  children,
  className = "",
  onClick = () => {},
}) {
  return (
    <Button
      className={` border-2 border-white w-96 py-3 
      text-center flex justify-center items-center rounded-md 
      bg-gradient-to-r from-pink_login_but1 via-pink_login_but2 to-pink_login_but3 ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

import useSound from "hooks/useSound"
import React, { useEffect, useState } from "react"

function secToTime(duration) {
  let seconds = Math.floor(duration % 60)
  let minutes = Math.floor((duration / 60) % 60)
  let hours = Math.floor((duration / (60 * 60)) % 24)
  // console.log({ seconds, minutes, hours })
  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  return hours + ":" + minutes + ":" + seconds
}

function TimeLeft({ minutes }) {
  const [seconds, setSeconds] = useState(0)
  const { sound, playSound } = useSound("./win.mp3")

  // console.log(msTime)
  if (!minutes) return null
  // playSound()
  useEffect(() => {
    const sec = minutes * 60
    setSeconds(sec)
    const intervalId = setInterval(() => {
      setSeconds((prevCount) => {
        if (prevCount > 0) return prevCount - 1
        else {
          playSound()
        }
      })
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className={`${seconds < 5 && "text-red"}`}>{secToTime(seconds)}</div>
  )
}

export default TimeLeft

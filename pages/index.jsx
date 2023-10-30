import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import Title from "ui/Title"
import LoginButton from "ui/button/login"
import { gameStore } from "mobx/gameStore"
import { getRandomNumber } from "lib/util"

const index = observer(() => {
  const router = useRouter()
  const [isButtons, setIsButtons] = useState(true)
  const [data, setData] = useState(true)
  const { questions, missions } = gameStore
  useEffect(() => {}, [])

  const updateData = (data) => {
    setData(data)
    setIsButtons(false)
  }

  return (
    <div className="flex flex-col w-screen h-[100vh]">
      <Title>date game</Title>
      {isButtons && (
        <div className="flex flex-col gap-2 justify-center items-center">
          <LoginButton onClick={() => updateData(missions)}>
            Mission
          </LoginButton>
          <LoginButton onClick={() => updateData(questions)}>
            Question
          </LoginButton>
          <LoginButton onClick={() => updateData()}>Random</LoginButton>
        </div>
      )}
      {!isButtons && <Show setIsButtons={setIsButtons} data={data} />}
    </div>
  )
})

const Show = observer(({ data, setIsButtons }) => {
  const [chosen, setChosen] = useState("")

  if (data.length < 1) return

  return (
    <div className="h-[100vh] w-screen bg-secondary flex flex-col  px-2">
      <div>{data[getRandomNumber(data.length)]}</div>
      <LoginButton onClick={() => setIsButtons(true)}>Back</LoginButton>
    </div>
  )
})

export default index

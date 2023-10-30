import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import Title from "ui/Title"
import RedButton from "ui/button/red"
import { gameStore } from "mobx/gameStore"
import { getRandomNumber, sleep } from "lib/util"
import BlueButton from "ui/button/blue"

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
  const getRandomData = () => {
    const ind = getRandomNumber(2)
    if (ind === 0) return missions
    return questions
  }

  return (
    <div className="flex flex-col w-screen h-[100vh]">
      <Title>date game</Title>
      {isButtons && (
        <div className="flex flex-col gap-2 justify-center items-center">
          <RedButton onClick={() => updateData(missions)}>Mission</RedButton>
          <RedButton onClick={() => updateData(questions)}>Question</RedButton>
          <RedButton onClick={() => updateData(getRandomData)}>
            Random
          </RedButton>
        </div>
      )}
      {!isButtons && <Show setIsButtons={setIsButtons} data={data} />}
    </div>
  )
})

const Show = observer(({ data, setIsButtons }) => {
  const [chosen, setChosen] = useState("")
  const [ind, setInd] = useState(0)

  if (data.length < 1) return

  const increaseInd = () => {
    setInd((prev) => {
      if (prev + 1 >= data.length) {
        return 0
      }
      return prev + 1
    })
  }

  const startSpin = async () => {
    const spinIterations = getRandomNumber(20)
    const sleepTime = 50
    let i = 0
    while (i < spinIterations) {
      await sleep(sleepTime)
      increaseInd()
      i++
    }
  }

  return (
    <div className="h-[100vh] w-screen bg-secondary flex flex-col  px-2">
      <div className="flex items-center h-[30%]">{data[ind]}</div>
      <RedButton className="mb-2" onClick={startSpin}>
        Spin
      </RedButton>
      <BlueButton onClick={() => setIsButtons(true)}>Back</BlueButton>
    </div>
  )
})

export default index

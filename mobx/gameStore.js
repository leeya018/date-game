import uuid4 from "uuid4"
import { makeAutoObservable, toJS } from "mobx"
import { getLocalMissions, getLocalQuestions } from "lib/util"

class Game {
  missions = []
  questions = []

  constructor() {
    makeAutoObservable(this)
    this.createDb()
    this.loadState()

    this.removeMission = this.removeMission.bind(this)
    this.removeQuestion = this.removeQuestion.bind(this)
    this.createDb = this.createDb.bind(this)
  }

  createDb() {
    this.questions = getLocalQuestions()
    this.missions = getLocalMissions()
  }
  removeMission(name) {
    const filteredMissions = [...this.missions].filter(
      (mission) => mission !== name
    )
    this.goals = [...filteredMissions]
  }
  removeQuestion(name) {
    const filteredQuestion = [...this.questions].filter(
      (question) => question !== name
    )
    this.goals = [...filteredQuestion]
  }

  loadState() {
    if (typeof window !== "undefined" && window.localStorage) {
      const missionsStr = window.localStorage.getItem("missions")
      const questionsStr = window.localStorage.getItem("questions")
      if (missionsStr !== null && !questionsStr) {
        this.missions = JSON.parse(missionsStr)
        this.questions = JSON.parse(questionsStr)

        console.log("loadState => " + this.missions)
        console.log("loadState => " + this.questions)
      }
    }
  }

  saveState() {
    console.log("saveState")
    if (typeof window !== "undefined" && window.localStorage) {
      console.log("saveState => " + this.missions)
      console.log("saveState => " + this.questions)

      window.localStorage.setItem("missions", JSON.stringify(this.missions))
      window.localStorage.setItem("questions", JSON.stringify(this.questions))
    }
  }
}
export const gameStore = new Game()

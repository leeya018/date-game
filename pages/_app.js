import { autorun } from "mobx"
import "../styles/globals.css"
import { gameStore } from "mobx/gameStore"

export default function App({ Component, pageProps }) {
  autorun(() => {
    gameStore.saveState()
  })
  return <Component {...pageProps} />
}

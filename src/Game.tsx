import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import GameBoard from "./components/Board"
import {
  selectPlayerName,
  setPlayer,
} from "./store/features/player/playerSlice"
import { useNavigate } from "react-router-dom"
import type { AppDispatch } from "./store/store"
import { useEffect } from "react"

const Game = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const playerName = useSelector(selectPlayerName)

  useEffect(() => {
    !playerName.length && navigate("/")
  })

  const handleButton = () => {
    dispatch(setPlayer(""))
    navigate("/")
  }

  return (
    <div className="App flex flex-col items-center justify-center gap-4 py-6">
      <div className="flex gap-2">
        Welcome:<span className=" font-semibold">{playerName}</span>
      </div>
      <GameBoard />
      <button onClick={handleButton} className=" font-semibold">
        Exit
      </button>
    </div>
  )
}

export default Game

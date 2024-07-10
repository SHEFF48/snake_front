import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import type { AppDispatch } from "./store/store"
import { setPlayer } from "./store/features/player/playerSlice"
import { setGameStatus } from "./store/features/game/gameSlice"

const Start = () => {
  const [playerName, setPlayerName] = useState<string>("")
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()

  const handleButton = () => {
    if (playerName.length) {
      dispatch(setPlayer(playerName))
      navigate("/game")
    }
    setError("Enter Player Name")
  }

  useEffect(() => {
    dispatch(setGameStatus("stop"))
    console.log("set game staus stop")
  }, [dispatch])

  useEffect(() => {
    playerName.length && setError("")
  }, [playerName])

  return (
    <div className="flex flex-col items-center h-[100vh]">
      <div className="flex flex-col justify-center  items-center h-full gap-6">
        <h1 className="text-2xl font-bold text-shadow-glow">Best Snake Game</h1>
        <div className="flex justify-center  items-center h-10 rounded-sm overflow-hidden">
          <input
            value={playerName}
            placeholder="Enter Your Name"
            onChange={e => setPlayerName(e.target.value)}
            type="text"
            className="pl-2 h-full border"
          />
          <button
            onClick={handleButton}
            className="flex items-center h-full px-3 bg-red-600 text-white font-bold"
          >
            Play Game
          </button>
        </div>
        <div className="flex h-6 text-red-500">{error}</div>
      </div>
    </div>
  )
}

export default Start

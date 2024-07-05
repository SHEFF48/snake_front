import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from "../../store/store"
import {
  resetGame,
  selectStatus,
  setGameStatus,
} from "../../store/features/game/gameSlice"
import { cn } from "../../utils/utils"

const Button = () => {
  const dispatch = useDispatch<AppDispatch>()
  const gameStatus = useSelector(selectStatus)

  const clickHandler = () => {
    switch (gameStatus) {
      case "play":
        dispatch(setGameStatus("pause"))
        break
      case "pause":
        dispatch(setGameStatus("play"))
        break
      case "stop":
        dispatch(setGameStatus("play"))
        break
      case "over":
        dispatch(resetGame())
        dispatch(setGameStatus("stop"))
        break
      default:
        break
    }
  }

  const getButtonName = () => {
    switch (gameStatus) {
      case "play":
        return "pause"
      case "pause":
        return "play"
      case "stop":
        return "play"
      case "over":
        return "new game"
      default:
        break
    }
  }

  return (
    <button
      onClick={clickHandler}
      className={cn(
        (gameStatus === "pause" || gameStatus === "stop") && "text-green-500",
        (gameStatus === "play" || gameStatus === "over") && "text-red-500",
      )}
    >
      {getButtonName()}
    </button>
  )
}

export default Button

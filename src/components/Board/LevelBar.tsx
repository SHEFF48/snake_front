import { useSelector } from "react-redux"
import { selectLevel } from "../../store/features/game/gameSlice"

const LevelBar = () => {
  const level = useSelector(selectLevel)
  return (
    <div>
      <h1>Level: {level}</h1>
    </div>
  )
}

export default LevelBar

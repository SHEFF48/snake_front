import { useSelector } from "react-redux"
import { selectPoints } from "../../store/features/game/gameSlice"

const PointsBar = () => {
  const points = useSelector(selectPoints)
  return (
    <div>
      <h1>Your score: {points}</h1>
    </div>
  )
}

export default PointsBar

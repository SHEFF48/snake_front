import type { FC } from "react"
import type { ICoordinates } from "./interfaces"
import { cn } from "../../utils/utils"
import { useSelector } from "react-redux"
import { selectApple } from "../../store/features/game/gameSlice"

const Apple: FC<ICoordinates> = ({ x, y }) => {
  const apple = useSelector(selectApple)

  console.log("new apple:", apple)
  const isApple = apple.x === x && apple.y === y

  return (
    <div
      className={cn(
        "absolute flex justify-center items-center shrink-0 rounded-full h-[90%] w-[90%]",
        isApple && apple.points === 1 && "border bg-orange-500",
        isApple && apple.points === 5 && "border bg-blue-700",
        isApple && apple.points === 10 && "border bg-purple-600",
      )}
    ></div>
  )
}

export default Apple

import { type FC } from "react"
import type { ICoordinates } from "./interfaces"
import { cn } from "../../utils/utils"

import { selectSnake } from "../../store/features/game/gameSlice"
import { useSelector } from "react-redux"

const Snake: FC<ICoordinates> = ({ x, y }) => {
  const snake = useSelector(selectSnake)
  // const direction = useSelector(selectDirection)

  const isSnake = snake.some((item: ICoordinates): boolean => {
    return item.x === x && item.y === y
  })

  const isHead = snake.some((item: ICoordinates, index: number): boolean => {
    return item.x === x && item.y === y && index === 0
  })

  return (
    <div
      className={cn(
        "absolute flex justify-center items-center border shrink-0 rounded-lg h-[90%] w-[90%]",
        isSnake && "bg-green-500",
        isHead && "bg-red-500",
      )}
    ></div>
  )
}

export default Snake

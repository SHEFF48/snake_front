import { useEffect } from "react"
// import { cn } from "../../utils/utils"
import Cell from "./Cell"
import PointsBar from "./PointsBar"
import type { ICoordinates } from "./interfaces"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from "../../store/store"
import {
  moveSnake,
  selectLevel,
  selectStatus,
  setDirection,
} from "../../store/features/game/gameSlice"
import Button from "./Button"

interface ICell extends ICoordinates {
  key: string
}

const GameBoard = () => {
  const xCount = 10
  const yCount = 10
  const cellSize = 40

  const generateCells = (xCount: number, yCount: number) => {
    const result: ICell[] = []
    for (let y = 0; y < yCount; y++) {
      for (let x = 0; x < xCount; x++) {
        result.push({ x: x, y: y, key: `${x}${y}` })
      }
    }
    return result
  }

  const boardCells = generateCells(xCount, yCount)

  const boardWidth = cellSize * xCount
  const boardHeight = cellSize * yCount

  // const apple = { x: 5, y: 5 }

  const gameStatus = useSelector(selectStatus)
  const gameLevel = useSelector(selectLevel)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          dispatch(setDirection({ x: 0, y: -1 }))
          break
        case "ArrowDown":
          dispatch(setDirection({ x: 0, y: 1 }))
          break
        case "ArrowLeft":
          dispatch(setDirection({ x: -1, y: 0 }))
          break
        case "ArrowRight":
          dispatch(setDirection({ x: 1, y: 0 }))
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [dispatch])

  useEffect(() => {
    // gameStatus === "start" || gameStatus === "pause"
    if (gameStatus === "play") {
      const intervalId = setInterval(() => dispatch(moveSnake()), 200)
      return () => clearInterval(intervalId)
    }
  }, [dispatch, gameStatus])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="w-1/3 text-left">
          <PointsBar />
        </div>
        <div className="w-1/3">Level: {gameLevel}</div>
        <div className="w-1/3 text-right">
          <Button />
        </div>
      </div>

      <div
        className={`flex flex-wrap w-[${boardWidth}] h-[${boardHeight}] transition-all`}
        style={{ width: boardWidth, height: boardHeight }}
      >
        {boardCells.map((cel, index) => {
          return (
            <Cell
              key={cel.key}
              height={cellSize}
              width={cellSize}
              cellNumber={cel.key}
              x={cel.x}
              y={cel.y}
            />
          )
        })}
      </div>
    </div>
  )
}

export default GameBoard

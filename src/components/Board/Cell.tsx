import type { FC } from "react"
import { cn } from "../../utils/utils"
import Apple from "./Apple"
import Snake from "./Snake"
import type { ICell } from "./interfaces"

const Cell: FC<ICell> = props => {
  console.log("Cell ")
  return (
    <div
      className={cn(
        "relative flex justify-center items-center border shrink-0 rounded-lg",
      )}
      style={{ width: props.width, height: props.height }}
    >
      <Snake x={props.x} y={props.y} />
      <Apple x={props.x} y={props.y} />
      {/* {props.cellNumber} */}
    </div>
  )
}

export default Cell

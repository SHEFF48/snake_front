export interface ICoordinates {
  x: number
  y: number
}

export interface ICell extends ICoordinates {
  width: number
  height: number
  // isSnake: boolean
  // isHead: boolean
  // isApple: boolean
  cellNumber?: number | string
}

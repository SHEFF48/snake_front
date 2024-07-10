export interface ICoordinates {
  x: number
  y: number
}

export interface ICell extends ICoordinates {
  width: number
  height: number
  cellNumber?: number | string
}

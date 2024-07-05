// import type { RootState } from "@/store/store"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"

interface IApple {
  x: number
  y: number
}

interface ISnake {
  x: number
  y: number
}

export interface IGameState {
  userId: string
  apple: IApple
  points: number
  snake: ISnake[]
}

const initialState: IGameState = {
  userId: "0",
  points: 0,
  apple: {
    x: 0,
    y: 7,
  },
  snake: [
    { x: 0, y: 2 },
    { x: 0, y: 1 },
    { x: 0, y: 0 },
  ],
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setApple: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setApple } = gameSlice.actions

export default gameSlice.reducer

/* Selectors */

export const selectUserId = (state: RootState) => state.game.userId
export const selectApple = (state: RootState) => state.game.apple
export const selectSnake = (state: RootState) => state.game.snake
export const selectPoints = (state: RootState) => state.game.points

// export const initialUser = (): AppThunk => dispatch => {
//   const getUser = async () => {
//     const userId = (await getUserId()) || "688147289"
//     if (userId) {
//       dispatch(setUserId(userId))
//     }
//   }
//   getUser()
// }

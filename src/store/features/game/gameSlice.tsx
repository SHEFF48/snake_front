// import type { RootState } from "@/store/store"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"
import { getRandomInt, getRandomPoints } from "../../../utils/utils"

interface IApple {
  x: number
  y: number
  points: number
}

interface ISnake {
  x: number
  y: number
}

interface IDirection {
  x: number
  y: number
}

interface ILevel {
  currentLevel: number
  nextLevelPoints: number
}

export type GameStatus = "play" | "stop" | "pause" | "over"

export interface IGameState {
  userId: string
  direction: IDirection
  apple: IApple
  points: number
  snake: ISnake[]
  status: GameStatus
  speed: number
  level: ILevel
}

const initialState: IGameState = {
  userId: "0",
  points: 0,
  apple: {
    x: 5,
    y: 7,
    points: 1,
  },
  snake: [
    { x: 0, y: 2 },
    { x: 0, y: 1 },
    { x: 0, y: 0 },
  ],
  direction: { x: 0, y: 1 },
  status: "stop",
  speed: 1000,
  level: {
    currentLevel: 1,
    nextLevelPoints: 50,
  },
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: () => {
      return { ...initialState }
    },
    setGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload
    },

    increasePoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload
    },

    setDirection: (state, action: PayloadAction<IDirection>) => {
      state.direction = action.payload
    },
    moveSnake: state => {
      const xCount = 10
      const yCount = 10
      // const cellSize = 40

      const newHead = {
        x: (state.snake[0].x + state.direction.x + xCount) % xCount,
        y: (state.snake[0].y + state.direction.y + yCount) % yCount,
      }

      const newSnake =
        newHead.x === state.apple.x && newHead.y === state.apple.y
          ? ((state.points += state.apple.points),
            (state.apple = {
              x: getRandomInt(xCount),
              y: getRandomInt(yCount),
              points: getRandomPoints(),
            }),
            state.points >= state.level.nextLevelPoints &&
              ((state.speed -= 10),
              (state.level.currentLevel += 1),
              (state.level.nextLevelPoints += 50)),
            [newHead, ...state.snake])
          : [newHead, ...state.snake.slice(0, -1)]

      console.log("new snake:", newSnake)

      state.snake = newSnake

      newSnake.slice(1).forEach((item, index) => {
        if (item.x === newHead.x && item.y === newHead.y) {
          state.status = "over"
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setGameStatus,
  setDirection,
  moveSnake,
  increasePoints,
  resetGame,
} = gameSlice.actions

export default gameSlice.reducer

/* Selectors */

export const selectUserId = (state: RootState) => state.game.userId
export const selectApple = (state: RootState) => state.game.apple
export const selectSnake = (state: RootState) => state.game.snake
export const selectPoints = (state: RootState) => state.game.points
export const selectDirection = (state: RootState) => state.game.direction
export const selectSpeed = (state: RootState) => state.game.speed
export const selectStatus = (state: RootState) => state.game.status
export const selectLevel = (state: RootState) => state.game.level.currentLevel

// export const initialUser = (): AppThunk => dispatch => {
//   const getUser = async () => {
//     const userId = (await getUserId()) || "688147289"
//     if (userId) {
//       dispatch(setUserId(userId))
//     }
//   }
//   getUser()
// }

/* Thunks */

// export const startEnergyIncrement = (): AppThunk => (dispatch, getState) => {
//   const state = getState()
//   const rechargingSpeed = 1000 / state.boost.upgrades.rechargingSpeedLevel
//   const intervalId = setInterval(() => {
//     const state = getState()

//     if (state.energy.currentEnergyValue < state.energy.fullEnergyValue) {
//       dispatch(incrementEnergy())
//     } else {
//       dispatch(clearIntervalId())
//     }
//   }, rechargingSpeed)
//   dispatch(setIntervalId(intervalId))
// }

// export const stopEnergyIncrement = (): AppThunk => dispatch => {
//   dispatch(clearIntervalId())
// }

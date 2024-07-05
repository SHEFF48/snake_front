import { configureStore } from "@reduxjs/toolkit"
import type { ThunkAction, Action } from "@reduxjs/toolkit"
import gameReducer from "./features/game/gameSlice"
import playerReducer from "./features/player/playerSlice"

export const store = configureStore({
  reducer: {
    player: playerReducer,
    game: gameReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

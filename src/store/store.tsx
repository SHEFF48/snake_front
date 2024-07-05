import { configureStore } from "@reduxjs/toolkit"
import type { ThunkAction, Action } from "@reduxjs/toolkit"
import gameReducer from "./features/game/gameSlice"
// import counterReducer from "./features/counter/conterSlice"

export const store = configureStore({
  reducer: {
    // initial: initialReducer,
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

// import type { RootState } from "@/store/store"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"

export interface UserState {
  userId: string
}

const initialState: UserState = {
  userId: "0",
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlayerName } = playerSlice.actions

export default playerSlice.reducer

/* Selectors */

export const selectUserId = (state: RootState) => state.user.userId

// export const initialUser = (): AppThunk => dispatch => {
//   const getUser = async () => {
//     const userId = (await getUserId()) || "688147289"
//     if (userId) {
//       dispatch(setUserId(userId))
//     }
//   }
//   getUser()
// }

// import type { RootState } from "@/store/store"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"

export interface UserState {
  playerName: string
}

const initialState: UserState = {
  playerName: "",
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<string>) => {
      state.playerName = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlayer } = playerSlice.actions

export default playerSlice.reducer

/* Selectors */

export const selectPlayerName = (state: RootState) => state.player.playerName

// export const initialUser = (): AppThunk => dispatch => {
//   const getUser = async () => {
//     const userId = (await getUserId()) || "688147289"
//     if (userId) {
//       dispatch(setUserId(userId))
//     }
//   }
//   getUser()
// }

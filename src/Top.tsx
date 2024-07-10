import { useDispatch, useSelector } from "react-redux"
import "./App.css"

import { useNavigate } from "react-router-dom"
import type { AppDispatch } from "./store/store"
import { useEffect } from "react"
import {
  fetchTopResults,
  selectTopResults,
} from "./store/features/game/gameSlice"

const TopScore = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const topResults = useSelector(selectTopResults)

  useEffect(() => {
    dispatch(fetchTopResults())
  }, [dispatch])

  const handleButton = () => {
    navigate(-1)
  }

  console.log(topResults)
  return (
    <div className="App flex flex-col items-center justify-center gap-10 py-6">
      <div className="flex gap-2">Top-10 results</div>
      <div className="flex flex-col w-1/4">
        {" "}
        {topResults.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div>{index + 1}.</div>
            <div className="">{item.playerName}</div>
            <div className="">{item.score}</div>
          </div>
        ))}
      </div>

      <button onClick={handleButton} className=" font-semibold">
        Back
      </button>
    </div>
  )
}

export default TopScore

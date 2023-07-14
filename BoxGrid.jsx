import Box from "./Box.jsx"
import "./BoxGrid.css"
import { useState } from "react"

export default function BoxGrid() {
  const [boxes, setBoxes] = useState([false, false, false, false, false, false, false])

  const reset = () => {
    setBoxes([false, false, false, false, false, false, false])
  }

  const toggleBox = (idx) => {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((value, i) => {
        if (i === idx) {
          return !value
        } else {
          return value
        }
      })
    })
  }

  return (
    <div className="BoxGrid">
      {boxes.map((b, idx) => {
        return (
          <Box
            isActive={b}
            key={idx}
            toggleBox={() => toggleBox(idx)}
          />
        )
      })}
      <button onClick={reset}>Reset</button>
    </div>
  )
}

import { useState } from "react"


const App=()=>{
  const [points, setPoints] = useState([])

  const clickHandle=(e)=>{
    // console.log(e.clientX,e.clientY);
    setPoints(points=>[...points,{
      x:e.clientX,
      y:e.clientY
    }])
  }

  return(
    <div className="screen" onClick={clickHandle}>
      <header className="header">
        <button>Redo</button>
        <button>Undo</button>
      </header>
      {points.map((point)=>(
        < div className = "point"
        style = {
          {
            left: point.x,
            top: point.y
          }
        }
        />
      ))}
    </div>
  )
}

export default App;









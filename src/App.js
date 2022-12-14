import { useState } from "react"


const App=()=>{
  const [points, setPoints] = useState([])
  const [data,setData]=useState([])

  const clickHandle=(e)=>{
    // console.log(e.clientX,e.clientY);
    setPoints(points=>[...points,{
      x:e.clientX,
      y:e.clientY
    }])
    setData([])
  }

  const redoHandle=(e)=>{
    e.stopPropagation()
    const balls =[...points]
    const item = balls.pop()
    console.log(balls)
    setPoints(balls)
    setData(data=>[...data,item])
  }

  const undoHandle=(e)=>{
    e.stopPropagation()
    const d=[...data]
    const item=d.pop()
    console.log(item);
    setPoints(points=>[...points,item])
    console.log(data)
    setData(d)
  }

  return(
    <div className="screen" onClick={clickHandle}>
      <header className="header">
        <button disabled={points.length===0} onClick={redoHandle}>Redo</button>
        <button disabled={data.length===0} onClick={undoHandle}>Undo</button>
      </header>
      {points.map((point,key)=>(
        < div className = "point" key={key}
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









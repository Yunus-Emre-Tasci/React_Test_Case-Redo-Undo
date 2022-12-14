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
      test
    </div>
  )
}

export default App;









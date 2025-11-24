import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const colors = ["red", "blue", "green", "yellow", "purple", "teal", "cyan", "olive", "maroon", "navy"]
  

  return (
    <div className='w-screen h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((col)=>(
            <button 
            key={col} 
            onClick={ () => setColor(col)} 
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg capitalize"
              style={{ backgroundColor: col }}>
              {col}
            </button>
          ))}

        </div>

      </div>
      
    </div>
  )
}

export default App

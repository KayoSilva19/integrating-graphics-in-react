import { Conatiner } from "./components/Container"

import { GraphicLine } from "./components/GraphicLine"
import { GraphicBar } from "./components/GraphicBar"

function App() {

  return (
   <Conatiner>
    <div className="flex flex-col h-full justify-center items-center flex-1">
      <div className=" flex flex-col gap-1 sm:w-[300px] md:w-[568px]">
      <GraphicLine/>
      <GraphicBar/>
      </div>
    </div>
   </Conatiner>
  )
}

export default App

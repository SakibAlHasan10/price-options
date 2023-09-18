
import './App.css'
import Linechart from './Components/LineChart/Linechart'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      {/* <h1 className='text-center bg-red-500'>Vite + React</h1> */}
      {/* <button className="btn btn-accent mx-auto">Accent</button> */}
      <PriceOptions></PriceOptions>
      <Linechart></Linechart>
    </>
  )
}

export default App

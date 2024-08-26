import { useState } from 'react'
import Carousel from './carousel/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Carousel />
  )
}

export default App

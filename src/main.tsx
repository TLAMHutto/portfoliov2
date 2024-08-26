import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ThreeBoxes from './ThreeBoxes'
import Carousel from './Carousel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Carousel />
  </StrictMode>,
)

import { React } from 'react'
import Home from './Home'
import Aside from './Aside';
import '../styles/MainContainer.css'

const MainContainer = () => {
  return (
    <div className='main-container'>
      <Aside />
      <Home />
    </div>
  )
}

export default MainContainer;
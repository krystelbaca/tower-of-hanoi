import { React } from 'react'
import SolutionSteps from './SolutionSteps';
import '../styles/Aside.css'

const Aside = () => {

  return (
    <div className='aside'>
      <h1 className='title'>Tower of Hanoi</h1>
      <p>The tower of Hanoi is a mathematical puzzle.<br />
        The puzzle starts with the disks stacked on one rod in order of decreasing size,<br /> the smallest at the top, thus approximating a canonical shape.<br />
        The objective of the puzzle is to move the entire stack to the last rod.
      </p>
    <br />
      <SolutionSteps />
    </div>
  ); 
}

export default Aside;
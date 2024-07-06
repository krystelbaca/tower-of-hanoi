import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className='title'>Tower of Hanoi</h1>
      <p>The tower of Hanoi is a mathematical puzzle.<br />
      It consists of three rods and several disks of different diameters, which can slide onto any rod.<br />
      The puzzle starts with the disks stacked on one rod in order of decreasing size, the smallest at the top, thus approximating a canonical shape.<br /> 
      The objective of the puzzle is to move the entire stack to the last rod.</p><br />
    </header>
  );
};

export default Header;

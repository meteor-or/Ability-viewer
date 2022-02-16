import { useState } from 'react';

const Toggle = () => {
  const [left, setLeft] = useState(4);

  function handleClick() {
    if(left === 4) {
      setLeft(28);
      return;
    } 
    setLeft(4);
  }
  return (
    <div className='btnToggle-wrap'
      style={{position: 'relative'}}>
      <div
        className='br-12 b-500 bg-white button-border'
        style={{width: 50, height: 24}}>
      </div>
      <div
        className='bg-500 br-circle bc-500 button-circle'
        style={{cursor: 'pointer', position: 'absolute', top: 3, left: left, width: 20, height: 20, transition: '.2s'}}
        onClick={handleClick}>
      </div>
    </div>
    
  )
};

export default Toggle;
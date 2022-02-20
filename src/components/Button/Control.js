function ControlMinus() {
  return (
    <button
      className='unset br-left b-900 px-16 active-control'
    >
      －
    </button>
  )
};

function ControlPlus() {
  return (
    <button
    className='unset br-right b-900 px-16 active-control'
    style={{marginLeft: '-1px'}}
    >
      ＋
    </button>
  )
};


const Control = () => {
  return (
    <div 
      className='control_wrap fs-16'
      style={{cursor: 'pointer', lineHeight: '1.5rem'}}
    >
      <ControlMinus />
      <ControlPlus />
    </div>
  )
};

export default Control;
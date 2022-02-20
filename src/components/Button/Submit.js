const submitType = Object.freeze({
  login: 'login',
  register: 'register'
});

const Submit = ({ type }) => {
  return (
    <button 
      className='unset br-12 b-500 bg-500 tc-50'
      style={{width: '90%', textAlign: 'center', height: 48, cursor: 'pointer'}}
    >
      {type}
    </button>
  )
};

export default Submit;
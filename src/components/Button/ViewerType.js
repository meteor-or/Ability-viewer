const viewerType = Object.freeze({
  ridi: 'ridi',
  kakao: 'kakao'
});

const ViewerType= ({ type, isSelected }) => {
  return (
    <button
      className={`unset br-8 px-8 py-4 ${isSelected ? 'b-800 bg-800 tc-50' : 'b-800 bg-white tc-900'}`}
      style={{cursor: 'pointer'}}
    >
      {type}
    </button>
  )
};

export default ViewerType
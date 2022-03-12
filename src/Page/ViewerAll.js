import indexStore from "../store/indexStore";



const ViewerAll = () => {
  const { optionStore } = indexStore();
  console.log(`fontSize: ${optionStore.fontSize}`);
  console.log(`lineHeigth: ${optionStore.lineHeigth}`);
  console.log(`lineHeigth: ${optionStore.paragraphHeigth}`);
  return(
    <div className='bg-white'>
      {optionStore.textBundle.map((text, index) => <p key={index} className={`${optionStore.fontSize} ${optionStore.lineHeigth} ${optionStore.paragraphHeigth}`}>{text}</p>)}
    </div>
  )
};

export default ViewerAll;
import indexStore from "../store/indexStore";



const ViewerAll = () => {
  const { optionStore } = indexStore();

  return(
    <div>
      {optionStore.textBundle.map((text, index) => <p key={index} className={`${optionStore.fontSize} ${optionStore.lineHeigth} ${optionStore.paragraphHeigth}`}>{text}</p>)}
    </div>
  )
};

export default ViewerAll;
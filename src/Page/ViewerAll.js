import indexStore from "../store/indexStore";


const ViewerAll = () => {
  const { optionStore } = indexStore();
  return(
    <div>
      {optionStore.text}
    </div>
  )
}

export default ViewerAll;
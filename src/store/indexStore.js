import optionStore from './optionStore'
import detailStore from './detailStore';
import userStore from './userStore';

const indexStore = () => ({
  optionStore, detailStore, userStore
})

export default indexStore;
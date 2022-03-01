import optionStore from './optionStore'
import detailStore from './detailStore';
import testStore from './testStore';
import userStore from './userStore';

const indexStore = () => ({
  optionStore, detailStore, testStore, userStore
})

export default indexStore;
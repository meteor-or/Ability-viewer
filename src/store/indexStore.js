import optionStore from './optionStore'
import detailStore from './detailStore';
import testStore from './testStore';

const indexStore = () => ({
  optionStore, detailStore, testStore
})

export default indexStore;
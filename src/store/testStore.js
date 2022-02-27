import { observable, action, makeObservable, configure } from 'mobx';

// action으로만 observable(state) 수정하도록 설정
configure({ enforceActions: 'observed' });

class TestStore {
  number = 0;
  msg = '';

  constructor() {
    makeObservable(this, 
      {
        number: observable,
        msg: observable,
  
        setNumber: action,
        setMsg: action,
      }
    )
  }

  setNumber() {
    this.number++;
  }
  setMsg(_msg) {
    this.msg = _msg;
  }
}

const testStore = new TestStore();

export default testStore;
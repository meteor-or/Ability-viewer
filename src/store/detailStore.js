import { observable, action, makeObservable, configure } from 'mobx';
import axios from 'axios';

// action으로만 observable(state) 수정하도록 설정
configure({ enforceActions: 'observed' });

class DetailStore {
  hashtag = {};

  constructor() {
    makeObservable(this, {
      hashtag: observable,

      setHashtag: action,
    })
  }

  // 외부 호출용 해시태그 설정
  setHashtag() {
    const request = {};
    this.#setHashtagPrivate(request);
  }

  // private 해시태그 설정
  async #setHashtagPrivate(request) {
    const response = await axios.post('https://ability-backend.azurewebsites.net/tags', request);
    this.hashtag = response.data;
    return true;
  }

}

const detailStore = new DetailStore();

export default detailStore;
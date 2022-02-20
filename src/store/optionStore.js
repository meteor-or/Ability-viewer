import { observable, action, makeObservable, configure } from 'mobx';

// action으로만 observable(state) 수정하도록 설정
configure({ enforceActions: 'observed' });

// singleton pattern
class OptionStore {
  static exist = false;
  static instance;
  
  // 글꼴
  fontFamily = '';
  // 글자 크기
  fontSize = '';
  // 문단 너비
  paragraphHeigth = '';
  // 줄 간격
  lineHeigth = '';

  // option type 설정
  optionType = Object.freeze({
    fontFamily: 'fontFamily',
    fontSize: 'fontSize',
    paragraphHeigth: 'paragraphHeigth',
    lineHeigth: 'lineHeigth'
  })

  // 외부 호출용 옵션 설정
  setOption(type, option) {
    // type check
    if(typeof(option) !== 'string') return false;
    return this.#setOptionPrivate(type);
  }

  // private 옵션 설정
  #setOptionPrivate() {
    switch (type) {
      case this.optionType.fontFamily:
        this.fontFamily = option;
        return true;
      case this.optionType.fontSize:
        this.fontSize = option;
        return true;
      case this.optionType.paragraphHeigth:
        this.paragraphHeigth = option;
        return true;
      case this.optionType.lineHeigth:
        this.lineHeigth = option;
        return true;
      default:
        return false;
    }
  }

  constructor() {
    if(exist) return OptionStore.instance;

    OptionStore.exist = true;
    OptionStore.instance = this;

    makeObservable(this, {
      // observable(state) 등록
      fontFamily: observable,
      fontSize: observable,
      paragraphHeigth: observable,
      lineHeigth: observable,

      // action 등록
      setOption: action,
    });
  }
}

const optionStore = new OptionStore();

export default optionStore;
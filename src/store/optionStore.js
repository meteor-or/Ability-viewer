import { observable, action, makeObservable, configure } from 'mobx';

// action으로만 observable(state) 수정하도록 설정
configure({ enforceActions: 'observed' });

// singleton pattern
class OptionStore {
  static exist = false;
  static instance;

  fontSizeNum = 5;
  paragraphHeigthNum = 1;
  lineHeigthNum = 1;
  
  // 글꼴
  fontFamily = '';
  // 글자 크기
  fontSize = `ridi_fs_${this.fontSizeNum}`;
  // 문단 너비
  paragraphHeigth = `ridi_ph_${this.paragraphHeigthNum}`;
  // 줄 간격
  lineHeigth = `ridi_lh_${this.lineHeigthNum}`;
  // 사용자 입력 Text
  text = '';

  // option type 설정
  optionType = Object.freeze({
    fontFamily: 'fontFamily',
    fontSize: 'fontSize',
    paragraphHeigth: 'paragraphHeigth',
    lineHeigth: 'lineHeigth'
  });

  setText(_text) {
    this.text = _text;
  };

  optionPlus(type) {
    switch (type) {
      case this.optionType.fontSize:
        if(this.fontSizeNum === 12) return;
        this.fontSizeNum++;
        break;
      case this.optionType.paragraphHeigth:
        if(this.paragraphHeigthNum === 6) return;
        this.paragraphHeigthNum++;
        break;
      case this.optionType.lineHeigth:
        if(this.lineHeigthNum === 6) return;
        this.lineHeigthNum++;
        break;
      default:
        break;
    }
  };

  optionMinus(type) {
    switch (type) {
      case this.optionType.fontSize:
        if(this.fontSizeNum === 1) return;
        this.fontSizeNum--;
        break;
      case this.optionType.paragraphHeigth:
        if(this.paragraphHeigthNum === 1) return;
        this.paragraphHeigthNum--;
        break;
      case this.optionType.lineHeigth:
        if(this.lineHeigthNum === 1) return;
        this.lineHeigthNum--;
        break;
      default:
        break;
    }
  };

  constructor() {
    if(OptionStore.exist) return OptionStore.instance;

    OptionStore.exist = true;
    OptionStore.instance = this;

    makeObservable(this, {
      // observable(state) 등록
      fontSizeNum: observable,
      paragraphHeigthNum: observable,
      lineHeigthNum: observable,
      fontFamily: observable,
      fontSize: observable,
      paragraphHeigth: observable,
      lineHeigth: observable,
      text: observable,

      // action 등록
      setText: action,
      optionPlus: action,
      optionMinus: action
    });
  }
}

const optionStore = new OptionStore();

export default optionStore;
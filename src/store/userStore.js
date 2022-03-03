import axios from 'axios';
import { observable, action, makeObservable, configure} from 'mobx';

// action으로만 observable(state) 수정하도록 설정
configure({ enforceActions: 'observed' });

class UserStore {

	logged = false;
	failedLogin = false;

  constructor() {
    makeObservable(this, 
      {
        logged: observable,
				failedLogin: observable,

        handleLogin: action,
      }
    )
  }

  handleLogin (id, pw) {
		const request = {
			"id" : id,
			"password" : pw
		};
		this.#setLogin(request);
	}
	
		
	async #setLogin (request) {
		try {
			const response = await axios.post('https://ability-backend.azurewebsites.net/login', request);
			this.logged = true
		} catch (err) {
			this.failedLogin = true
		}
  }
}	
const userStore = new UserStore();

export default userStore;
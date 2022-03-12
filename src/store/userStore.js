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

	handleLogout () {
		this.#setLogout();
	}
		
	async #setLogin (request) {
		try {
			const response = await axios.post('https://ability-backend.azurewebsites.net/login', request);
			this.logged = true
			console.log(response);
		} catch (err) {
			this.failedLogin = true
		}
  }

	async #setLogout () {
		try {
			axios.post('https://ability-backend.azurewebsites.net/logout');
			this.logged = false;
		} catch (err) {
			console.log(err);
		}
	}
}	
const userStore = new UserStore();

export default userStore;
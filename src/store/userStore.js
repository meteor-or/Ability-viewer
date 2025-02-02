import axios from 'axios';
import { observable, action, makeObservable, configure} from 'mobx';

// action으로만 observable(state) 수정하도록 설정
configure({ enforceActions: 'observed' });

class UserStore {

	online = false;

  constructor() {
    makeObservable(this, 
      { 
        online: observable,

				handleSignup: action,
        handleLogin: action,
				handleLogout: action,
      }
    )
  }

	handleSignup (id, email, pw) {
		const request = {
			"id": id,
			"email": email,
			"password" : pw
		};
		this.#setSignup(request);
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
	
	async #setSignup (request) {
		try {
			const response = await axios.post('https://ability-backend.azurewebsites.net/users', request);
		} catch (err) {
			console.log(err)
		}
  }
	async #setLogin (request) {
		try {
			const response = await axios.post('https://ability-backend.azurewebsites.net/login', request);
			this.online = true;
		} catch (err) {
			console.log(err)
		}
  }

	async #setLogout () {
		try {
			axios.post('https://ability-backend.azurewebsites.net/logout');
			this.online = false;
		} catch (err) {
			console.log(err);
		}
	}
}	
const userStore = new UserStore();

export default userStore;
import axios from 'axios';
import { observable, action, makeObservable, configure } from 'mobx';

// action으로만 observable(state) 수정하도록 설정
configure({ enforceActions: 'observed' });

class UserStore {
	userToken = false;

  constructor() {
    makeObservable(this, 
      {
        userToken: observable,
  
        handleLogin: action,
      }
    )
  }

  handleLogin (id, pw) {
		const request = {
			"id" : id,
			"password" : pw
		}

		try {
				axios({
				method: "post",
				url: "https://ability-backend.azurewebsites.net/login",
				data: request,
			});
			this.userToken = true;
		} catch(error) {
			console.log({error})
		}
  }
}

const userStore = new UserStore();

export default userStore;
import axios from 'axios';

function handleRegister(name, id, pw, email) {
  if(name === '' || id === '' || pw === '' || email === '') {
    alert('경고 메세지');
    return false;
  }

  if(typeof(name) !== 'string' || typeof(id) !== 'string' || typeof(pw) !== 'string' || typeof(email) !== 'string') {
    alert('경고 메세지');
    return false;
  }

  const request = {
    name: name,
    id: id,
    password: pw,
    email: email
  }

  register(request).then(res => {
    if(!res) return;
    alert('회원가입에 성공했습니다.');
  });
}

async function register(request) {
  await axios.post('url', request);
  return true;
}
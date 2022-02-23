import React from 'react'
import { Link } from 'react-router-dom'
import Submit from '../components/Button/Submit'
import TextInput from '../components/Input/TextInput'
import PasswordInput from '../components/Input/PasswordInput'

const Login = () => {
	return (
		<div id='login'>
			<div className='px-24 w-full flex f-column f-ai-center'>
				<from method="post" id="authForm">
					<TextInput id="IoginId" placeholder="아이디"/>
					<PasswordInput id="IoginPw" placeholder="비밀번호"/>
					<Submit type='submit' value="로그인" />
				</from>
				<ul className='flex'>
					<li><Link to="/signup">회원가입 </Link></li>
					<li><Link to="/find_id">아이디찾기 </Link></li>
					<li><Link to="/find_password">비밀번호찾기 </Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Login
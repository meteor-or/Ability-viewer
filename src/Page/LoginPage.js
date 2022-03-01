import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { observer } from 'mobx-react';
import indexStore from '../store/indexStore';

const LoginPage = () => {
	const {userStore} = indexStore();

	const [loginId, setLoginId] = useState("")
	const [loginPw, setLoginPw] = useState("")
	

	
	return (
		<div id='loginPage'>
			<div className='px-24 py-24 w-full flex f-column f-ai-center'>
				<from method="post" id="authForm">
					<label htmlFor="IoginId">아이디</label>
					<input type="text" 
					id="loginId"
					className='unset border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
					placeholder="아이디를 입력하세요" 
					onChange={(e)=>{setLoginId(e.target.value)}}
					required>
					</input>

					<label htmlFor="pw">비밀번호</label>
					<input type="password" 
					id="loginPw"
					className='unset border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
					placeholder="비밀번호를 입력하세요"
					onChange={(e)=>{setLoginPw(e.target.value)}}>
					</input>

					<button 
					className='unset border-box br-12 b-500 bg-500 tc-50 w-full px-16 py-12 my-8' 
					style={{textAlign: 'center', cursor: 'pointer'}}
					onClick={()=>{userStore.handleLogin(loginId,loginPw)}}>로그인</button>
				</from>
				<div className='errorBox'></div>
				<ul className='flex'>
					<li className='mr-4'><Link to="/signup">회원가입 |</Link></li>
					<li className='mr-4'><Link to="/find_id">아이디찾기 |</Link></li>
					<li><Link to="/find_password">비밀번호찾기 </Link></li>
				</ul>
			</div>
		</div>
	)
}

export default observer(LoginPage)
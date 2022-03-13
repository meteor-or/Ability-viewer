import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { observer } from 'mobx-react';
import indexStore from '../store/indexStore';

const LoginPage = () => {
	const {userStore} = indexStore();

	let navigate = useNavigate();

	const [loginId, setLoginId] = useState("")
	const [loginPw, setLoginPw] = useState("")

	
		userStore.online && navigate('/') 
	
	return (
		<div id='loginPage'>
			<div className='px-24 py-24 w-full flex f-column f-ai-center'>
				<form onSubmit={e => e.preventDefault()}>
					<label htmlFor="IoginId">아이디</label>
					<input type="text" 
					id="loginId"
					className=' border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
					placeholder="아이디를 입력하세요" 
					onChange={(e)=>{setLoginId(e.target.value)}}
					required>
					</input>

					<label htmlFor="pw">비밀번호</label>
					<input type="password" 
					id="loginPw"
					className='unset border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
					placeholder="비밀번호 8글자 이상 입력하세요"
					minLength={8}
					onChange={(e)=>{setLoginPw(e.target.value)}}
					required>
					</input>
					
					<div className='errorBox' style={{color:"red"}}></div>
					<button 
					className='unset border-box br-8 b-500 bg-500 tc-50 w-full px-16 py-12 my-8'
					style={{textAlign: 'center', cursor: 'pointer'}}
					onClick={()=>{userStore.handleLogin(loginId,loginPw)}}>로그인</button>
				</form>

				<Link to="/find_user">아이디 | 비밀번호 찾기</Link>
			</div>
		</div>
	)
}

export default observer(LoginPage)
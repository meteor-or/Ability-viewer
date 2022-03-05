import React, { useState } from 'react'

import { observer } from 'mobx-react';
import indexStore from '../store/indexStore';

const SignupPage = () => {
	const {userStore} = indexStore();

	const [signupEmail,setSignupEmail] = useState('')
	const [signupId, setSignupId ] = useState('')
	const [signupPw, setSignupPw ] = useState('')
	
	const frequencyEmails = ['@naver.com','@gmail.com','@daum.net','@hanmail.net', '@yahoo.com', '@outlook.com','@nate.com','@kakao.com']
	
	const onChangeEmail = (e) => {
		const newValue = frequencyEmails.map((email)=>(
			e.target.value.includes("@") ?
				e.target.value.split("@")[0] + email : 
				e.target.value + email
		))
		setSignupEmail(newValue)
	}
	

	return (
		<div>
			<div className='px-24 py-24 w-full flex f-column f-ai-center'>
			<form>
			<label htmlFor='email'>이메일</label>
			<input 
			className='unset border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 fs-16' type="email" 
			list='email' 
			placeholder='이메일을 입력하세요'
			onChange={onChangeEmail} 
			required/>
			<datalist id="email">
				{signupEmail && signupEmail.map((email)=> (
					<option value={email}/>
				))}
			</datalist>
			
				<label htmlFor="IoginId">아이디</label>
				<input type="text" 
				id="signupId"
				className=' border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
				placeholder="아이디를 입력하세요"
				onChange={(e)=>{setSignupId(e.target.value)}}
				required>
				</input>

				<label htmlFor="pw">비밀번호</label>
				<input type="password" 
				id="signupPw"
				className='unset border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
				placeholder="비밀번호 8글자 이상 입력하세요"
				minLength={8}
				onChange={(e)=>{setSignupPw(e.target.value)}}
				required>
				</input>

				<label htmlFor="pw">비밀번호 확인</label>
				<input type="password" 
				id="signupPw2"
				className='unset border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
				placeholder="비밀번호 8글자 이상 입력하세요"
				minLength={8}
				required>
				</input>
				
				<label className='flex f-ai-center py-4'>
				<input type='checkbox'></input>
				<span className='ml-8'>이용약관 동의</span>
				</label>
				<label className='flex f-ai-center py-4'>
				<input type='checkbox'></input>
				<span className='ml-8'>개인정보수집 및 이용 동의</span>
				</label>
				<label className='flex f-ai-center py-4'>
				<input type='checkbox'></input>
				<span className='ml-8'>만 14세 이상입니다.</span>
				</label>
				<button 
				type='submit'
				className='unset border-box br-8 b-500 bg-500 tc-50 w-full px-16 py-12 my-8' 
				style={{textAlign: 'center', cursor: 'pointer'}}
				onClick={()=>{userStore.handleSignup(signupEmail,signupId, signupPw)}}
				>회원가입</button>
			</form>
			</div>
		</div>
	)
}

export default observer(SignupPage);
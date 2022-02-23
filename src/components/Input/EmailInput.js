import React, { useState } from 'react'

const EmailInput = () => {
	const [inputEmail,setInputEmail] = useState('')
	
	const onChangeEmail = (e) => {
		const newValue = frequencyEmails.map((email)=>(
			e.target.value.includes("@") ?
				e.target.value.split("@")[0] + email : 
				e.target.value + email
		))
		setInputEmail(newValue)
	}
	
	const frequencyEmails = ['@naver.com','@gmail.com','@daum.net','@hanmail.net', '@yahoo.com', '@outlook.com','@nate.com','@kakao.com']

	return (
		<div>
			<label htmlFor='email'>이메일</label>
			<input className='unset border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 fs-16' type="email" list='email' onChange={onChangeEmail} />
			<datalist id="email">
				{inputEmail && inputEmail.map((email)=> (
					<option value={email}/>
				))}
			</datalist>
		</div>
	)
}

export default EmailInput
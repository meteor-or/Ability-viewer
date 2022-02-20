import React, { useState } from 'react'

const Email= () => {
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
			<input list='email' onChange={onChangeEmail} />
			<datalist id="email">
				{inputEmail && inputEmail.map((email)=> (
					<option value={email}/>
				))}
			</datalist>
		</div>
	)
}

export default Email
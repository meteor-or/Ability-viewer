import React, { useState } from 'react'

const PasswordInput = (props) => {
	const [inputPwVal, setInputPwVal] = useState("")
	console.log("inputPwVal",inputPwVal)
	
	return (
		<div>
			<>
			<label htmlFor={props.id}>비밀번호</label>
			<input type="password" className='w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' id={props.id}
			placeholder={props.placeholder}
			onChange={(e)=>{setInputPwVal(e.target.value)}}>
			</input>
			</>
		</div>
	)
}

export default PasswordInput
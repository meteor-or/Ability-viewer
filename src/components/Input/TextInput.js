import React, { useState } from 'react'

const TextInput = (props) => {
	const [inputTextVal, setInputTextVal] = useState("")
	console.log("inputTextVal",inputTextVal)
	
	return (
		<>
			<label htmlFor={props.id}>아이디</label>
			<input type="text" className='w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' id={props.id}
			placeholder={props.placeholder}
			onChange={(e)=>{setInputTextVal(e.target.value)}}>
			</input>
		</>
	)
}

export default TextInput
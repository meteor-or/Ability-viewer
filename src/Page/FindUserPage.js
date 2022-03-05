import React from 'react'

const FindUserPage = () => {
	return (
		<>	
			<div className='px-24 py-24 w-full flex f-column f-ai-center'>
				<form className='mb-24'>
					<h2 className='fs-20 font-bold py-12'>아이디 찾기</h2>
					<label htmlFor="FindId">이메일</label>
					<input type="text" 
					id="email"
					className=' border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
					placeholder="해당 이메일로 아이디를 보내드립니다." 
					required>
					</input>
					<button 
					type='submit'
					className='unset border-box br-8 b-500 bg-500 tc-50 w-full px-16 py-12 my-8' 
					style={{textAlign: 'center', cursor: 'pointer'}}
					>인증번호 요청하기</button>
				</form>

				<form>
					<h2 className='fs-20 font-bold py-12'>비밀번호 찾기</h2>
					<labe>이메일</labe>
					<input type="text" 
					id="email"
					className=' border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
					placeholder="해당 이메일로 재설정 링크를 보내드립니다." 
					required>
					</input>

					<label htmlFor="IoginId">아이디</label>
					<input type="text" 
					id="loginId"
					className=' border-box w-full bg-white br-8 px-16 py-12 b-400 my-8 active-b-800 pretendard fs-16' 
					placeholder="아이디를 입력하세요" 
					required>
					</input>



					<button 
					type='submit'
					className='unset border-box br-8 b-500 bg-500 tc-50 w-full px-16 py-12 my-8' 
					style={{textAlign: 'center', cursor: 'pointer'}}
					>비밀번호 변경 이메일 받기</button>
				</form>
			</div>
		</>
	)
}

export default FindUserPage
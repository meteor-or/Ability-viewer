import React, { useCallback, useState } from 'react'
import Hashtag from '../components/Hashtag';
import { observer } from 'mobx-react';

const ViewerPage = () => {
	const [inputHashtagVal, setInputHashtagVal] = useState()
	const [hashtags, setHashtags] = useState([]);
	
	const onChangeHashtag = (e) => {
		setInputHashtagVal(e.target.value.trim().split(" "))
	}
	const clickSpace = ((e) =>{
		if (e.keyCode == 32 && e.target.value.trim() !== '') {
			setHashtags((hashtags) => [...hashtags, inputHashtagVal])
			e.target.value = ""
		}
	})

	return (
		<div className='px-24'>
			<div className='pt-20'></div>
			<div className='bg-white flex f-column b-400 br-12 py-12 px-16'>
				<input className='unset py-8' placeholder='제목을 입력하세요' style={{borderBottom: "1px solid var(--gray--300)"}}></input>
				<div className='hashtagWrap flex f-ai-center' style={{borderBottom: "1px solid var(--gray--300)"}} >
					<div className='hastagBox'>
						{hashtags && hashtags.map((text) => (
							<Hashtag text={text}/>
						))}
					</div>
					<input className='unset py-8 ' placeholder='해시태그를 입력하세요' onKeyUp={clickSpace} onChange={onChangeHashtag}/>
				</div>
				<textarea className='unset border-box py-8' placeholder='내용을 입력하세요'>
				</textarea>
			</div>
		</div>
	)
}

export default observer(ViewerPage);
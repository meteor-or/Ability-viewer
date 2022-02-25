import React, { useCallback, useState } from 'react'
import Hashtag from '../components/Hashtag';

const ViewerPage = () => {
	
	const [hashtags, setHashtags] = useState([]);
	const [임시, set임시] = useState()
	const [hashtags2, setHashtags2] = useState([]);
	
	const onChangeHashtag = (e) =>{
		setHashtags(e.target.value.match(/#[^\s#]+/g))
	}
	const onChangeHashtag2 = (e) => {
		set임시(e.target.value.trim().split(" "))
	}
	const clickEnter = useCallback((e) =>{
		if (e.keyCode == 32 && e.target.value.trim() !== '') {
			console.log("임시",임시)
			setHashtags2((hashtags2) => [...hashtags2, 임시])
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
						{hashtags2 && hashtags2.map((text) => (
							<Hashtag text={text}/>
						))}
					</div>
					<input className='unset py-8 ' placeholder='해시태그를 입력하세요' onKeyUp={clickEnter} onChange={onChangeHashtag2}/>
				</div>
				<div className='hashtagList flex'>
					{hashtags && hashtags.map((text) => (
							<Hashtag text={text}/>)
						)}
				</div>
				<textarea className='unset border-box py-8' onChange={onChangeHashtag} placeholder='내용을 입력하세요'>
				</textarea>
			</div>
		</div>
	)
}

export default ViewerPage
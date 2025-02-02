import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import indexStore from '../store/indexStore';
import { observer } from 'mobx-react';

// components
import ViewerType from '../components/Button/ViewerType';
import Control from '../components/Button/Control';
import Hashtag from '../components/Hashtag';
import Toggle from '../components/Button/Toggle';

// option type 설정
const optionType = Object.freeze({
	fontFamily: 'fontFamily',
	fontSize: 'fontSize',
	paragraphHeigth: 'paragraphHeigth',
	lineHeigth: 'lineHeigth'
});



const ViewerPage = () => {
	const { optionStore } = indexStore();
	const { detailStore } = indexStore();

	const [inputHashtagVal, setInputHashtagVal] = useState()
	const [hashtags, setHashtags] = useState([]);
	const onChangeHashtag = (e) => {
		setInputHashtagVal(e.target.value.trim().split(" "))
	}
	const deleteLastHashtag = () => {
		setHashtags(hashtags =>[...hashtags, hashtags.pop()])
		hashtags && document.querySelector(".hastagBox").lastChild.remove()
	}
	const addHashtag = (e) => {
		setHashtags((hashtags) => [...hashtags, inputHashtagVal])
		e.target.value = ""
	} 
	const keyEvent = ((e) =>{
		if ((e.keyCode == 32) && e.target.value.trim() !== '') {
			addHashtag(e)
		}
		if ((e.keyCode == 13) && e.target.value.trim() !== '') {
			addHashtag(e)
		}
		if (e.target.value == "" && e.keyCode == 8 ) {
			e.preventDefault()
			deleteLastHashtag()
		}
	})
	
	return (
		<div className='ViewerPage pt-12'>
			<div className='ViewerType mx-20 bg-white flex f-ai-center f-jc-between p-12 br-12'>
				<p>뷰어 설정</p>
				<div className='btnWrap'>
					<ViewerType type={optionStore.viewer.ridi} isSelected={optionStore.viewerType === '리디북스' && true}/>
					<ViewerType type={optionStore.viewer.kakao} isSelected={optionStore.viewerType === '카카오' && true}/>
				</div>
			</div>
			<div className='ViewerSetting mx-20 mt-12 bg-white p-12 br-12'>
				<div className='ViewerSettingDetail flex f-ai-center f-jc-between my-8'>
					<p className='flex f-ai-center'>글꼴</p>
					<p className='flex mb-4' style={{cursor: 'pointer'}} onClick={e=>e.target.textContent.includes('|') === false && optionStore.setFontFamily(e.target.textContent.split(' ')[1])}>
						<span className={optionStore.fontFamily === '바탕' ? 'tc-900' : 'tc-300'}>KoPub 바탕</span>
						<span className='mx-4 tc-300'> | </span> 
						<span className={optionStore.fontFamily === '돋움' ? 'tc-900' : 'tc-300'}>KoPub 돋움</span>
						<span className='mx-4 tc-300'> | </span> 
						<span className={optionStore.fontFamily === '명조' ? 'tc-900' : 'tc-300'}>KoPub 명조</span>
					</p>
				</div>
				<div className='ViewerSettingDetail flex f-ai-center f-jc-between my-8'>
					<p className='flex f-ai-center'>글자 크기<span className='fs-14 ml-4'>{optionStore.fontSizeNum}</span></p>
					<Control type={optionType.fontSize} />
				</div>
				<div className='ViewerSettingDetail flex f-ai-center f-jc-between my-8'>
					<p className='flex f-ai-center'>문단 너비<span className='fs-14 ml-4'>{optionStore.paragraphHeigthNum}</span></p>
					<Control type={optionType.paragraphHeigth} />
				</div>
				<div className='ViewerSettingDetail flex f-ai-center f-jc-between my-8'>
					<p className='flex f-ai-center'>줄 간격<span className='fs-14 ml-4'>{optionStore.lineHeigthNum}</span></p>
					<Control type={optionType.lineHeigth} />
				</div>
				{optionStore.viewerType === optionStore.viewer.kakao && (
					<div className='ViewerSettingDetail flex f-ai-center f-jc-between my-8'>
						<p className='flex f-ai-center'>이미지 뷰어로 보기</p>
						<Toggle />
					</div>
				)}
			</div>
			<div className='ViewerBtn tc-500 mx-20 my-12' style={{textAlign: 'right'}}>
				<Link to='/viewer_all' onClick={()=>{
					optionStore.setText(document.querySelector('.user_text').value);
					optionStore.setTextBundle(optionStore.text);
				}}>전체보기</Link>
				<Link to='/' onClick={()=>detailStore.setHashtag()} className='ml-12'>저장하기</Link>
			</div>
			<div className='Viewer'>
				<div className='bg-white flex f-column br-12 py-12 px-24'>
					<input className='unset py-12' placeholder='제목을 입력하세요' style={{borderBottom: "1px solid var(--gray--300)"}}></input>
					<div className='hashtagWrap flex f-column' style={{borderBottom: "1px solid var(--gray--300)"}} >
						<div className='hastagBox my-4 flex f-wrap'>
							{hashtags && hashtags.map((text, index) => (
								<Hashtag key={index} text={text}/>
							))}
						</div>
						<input className='unset py-8 mb-4' placeholder='해시태그를 입력하세요' onKeyUp={keyEvent} onChange={onChangeHashtag}/>
					</div>
					<textarea className='unset border-box py-12 user_text'defaultValue={optionStore.text} style={{height: 500}} placeholder='내용을 입력하세요' />
				</div>
			</div>
		</div>
		
	)
}

export default observer(ViewerPage);
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import indexStore from '../store/indexStore';
import { observer } from 'mobx-react';

// components
import ViewerType from '../components/Button/ViewerType';
import Control from '../components/Button/Control';
import Hashtag from '../components/Hashtag';

//  viewer type 설정
const viewerType = Object.freeze({
	ridi: '리디북스',
	kakao: '카카오'
});

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
	const clickSpace = ((e) =>{
		if (e.keyCode == 32 && e.target.value.trim() !== '') {
			setHashtags((hashtags) => [...hashtags, inputHashtagVal])
			e.target.value = ""
		}
		if (e.keyCode == 8 && hashtags) {
			hashtags.pop()
			setHashtags(hashtags)
			const lastHashtag = document.querySelector(".hastagBox").lastChild
			lastHashtag.remove()
		}
	})
	
	return (
		<div className='ViewerPage pt-12'>
			<div className='ViewerType mx-20 bg-white flex f-ai-center f-jc-between p-12 br-12'>
				<p>뷰어 설정</p>
				<div className='btnWrap'>
					<ViewerType type={viewerType.ridi} isSelected='true'/>
					<ViewerType type={viewerType.kakao} />
				</div>
			</div>
			<div className='ViewerSetting mx-20 mt-12 bg-white p-12 br-12'>
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
			</div>
			<div className='ViewerBtn tc-500 mx-20 my-12' style={{textAlign: 'right'}}>
				<Link to='/viewer_all' onClick={()=>optionStore.setText(document.querySelector('.user_text').value)}>전체보기</Link>
				<Link to='/' onClick={()=>detailStore.setHashtag()} className='ml-12'>저장하기</Link>
			</div>
			<div className='Viewer'>
				<div className='bg-white flex f-column br-12 py-12 px-24'>
					<input className='unset py-8' placeholder='제목을 입력하세요' style={{borderBottom: "1px solid var(--gray--300)"}}></input>
					<div className='hashtagWrap flex f-ai-center' style={{borderBottom: "1px solid var(--gray--300)"}} >
						<div className='hastagBox'>
							{hashtags && hashtags.map((text, index) => (
								<Hashtag key={index} text={text}/>
							))}
						</div>
						<input className='unset py-8 ' placeholder='해시태그를 입력하세요' onKeyUp={clickSpace} onChange={onChangeHashtag}/>
					</div>
					<textarea className='unset border-box py-8 user_text'defaultValue={optionStore.text} style={{height: 500}} placeholder='내용을 입력하세요' />
				</div>
			</div>
		</div>
		
	)
}

export default observer(ViewerPage);
import React from 'react'
import Hashtag from '../components/Hashtag'

const ListPage = () => {
	return (
		<>
			<div className='p-24 h-full'>
				<div className='w-full h-full'>
				<article className='br-8 bg-white p-12 mb-8'>
					<h3 className='px-4 py-8 font-bold hidden'>태그</h3>
					<ul id='hashtagList' className='pl-4 py-8 flex' style={{overflowY:"hidden", overflowX:"auto"}}>
						<li>
							<Hashtag text="베세랑만남" />
						</li>
						<li>
							<Hashtag text="삽화" />
						</li>
						<li>
							<Hashtag text="큰세가움ㅠㅠ" />
						</li>
						<li>
							<Hashtag text="룸메이트" />
						</li>
						<li>
							<Hashtag text="공포방송" />
						</li>
						<li>
							<Hashtag text="공포방송" />
						</li>
						<li>
							<Hashtag text="공포방송" />
						</li>
					</ul>
				</article>

				<div className='br-8 bg-white h-full py-12 px-24'>
					<ul className='flex py-4 font-bold hidden' style={{textAlign:"center"}}>
						<li style={{flexBasis:"100%", cursor:"pointer"}}>글</li>
						<li style={{flexBasis:"100%", cursor:"pointer"}}>책장</li>
					</ul>
				<section >
				<h3 className='hidden'>글 목록</h3>
				<ul>
					<li className='pt-16'>
						<div className='bookHeader flex f-ai-end'>
							<h5 className='font-bold'>데뷔 못하면 죽는 병 걸림 1화</h5> 
							<span className='tc-500 ml-4 fs-14'>2021.12.31</span>
						</div>
						<div className='hashtagBox pt-8 pb-16 flex f-wrap'
					style={{borderBottom: "1px solid var(--gray--300)"}}>
							<Hashtag text="큰세등장" />
							<Hashtag text="삽화" />
							<Hashtag text="큰세가움ㅠㅠ" />
							<Hashtag text="룸메이트" />
							<Hashtag text="공포방송" />
						</div>
					</li>
					<li className='pt-16'>
						<div className='bookHeader flex f-ai-end'>
							<h4 className='font-bold'>데뷔 못하면 죽는 병 걸림 2화</h4> 
							<span className='tc-500 ml-4 fs-14'>2021.12.31</span>
						</div>
						<div className='hashtagBox pt-4 pb-16 flex f-wrap'
					style={{borderBottom: "1px solid var(--gray--300)"}}>
							<Hashtag text="베세랑만남" />
							<Hashtag text="삽화" />
							<Hashtag text="큰세가움ㅠㅠ" />
							<Hashtag text="룸메이트" />
							<Hashtag text="공포방송" />
						</div>
					</li>
				</ul>
				</section>
				</div>
				</div>
			</div>
		</>
	)
}

export default ListPage
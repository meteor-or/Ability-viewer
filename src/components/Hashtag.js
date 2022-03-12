import React from 'react'

const Hashtag = (props) => {
	return (
		<div className='fs-14 hashtag bg-100 w-fit py-4 px-8 mr-4 mt-4 tc-600 br-4' style={{cursor:'pointer'}}>
			{props.text}
		</div>
	)
}

export default Hashtag
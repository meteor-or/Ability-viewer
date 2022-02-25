import React from 'react'

const Hashtag = (props) => {
	return (
		<span className='bg-400 w-fit px-8 py-4 ml-4 tc-white br-8'>
			#{props.text}
		</span>
	)
}

export default Hashtag
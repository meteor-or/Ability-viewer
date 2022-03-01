import React from 'react'
import { Link } from 'react-router-dom'
import logoShort from '../asset/icon.png'
import logoFull from '../asset/logo.png'

// (A) 이니셜 한 글자만 
export const LogoShort = () => {
	return (
		<Link to='/'>
			<img src={logoShort} className='w-full h-full' alt='logo'/>
		</Link>
	)
}

// (Ability) 전체 
export const LogoFull = () => {
	return (
		<Link to='/'>
			<img src={logoFull} className='w-fit h-fit' alt='logo'/>
		</Link>
	)
}

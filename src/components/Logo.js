import React from 'react'
import { Link } from 'react-router-dom'
import logoShort from '../asset/icon.png'
import logoFull from '../asset/logo.png'


export const LogoShort = () => {
	return (
		<Link to="/">
			<img src={logoShort} className="w-full h-full" />
		</Link>
	)
}
export const LogoFull = () => {
	return (
		<Link to="/">
			<img src={logoFull} className="w-fit h-fit" />
		</Link>
	)
}

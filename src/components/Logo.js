import React from 'react'
import logoShort from '../asset/icon.png'
import logoFull from '../asset/logo.png'


export const LogoShort = () => {
	return (
		<a href="/">
			<img src={logoShort} className="w-full h-full" />
		</a>
	)
}
export const LogoFull = () => {
	return (
		<a href="/">
			<img src={logoFull} className="w-fit h-fit" />
		</a>
	)
}

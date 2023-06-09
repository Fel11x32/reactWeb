import React from 'react'

export default function Button({styles}) {
	return (
		<button
			type='button'
			className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-5 text-primary outline-none rounded-md
			${styles}`}>
				Get Started
			</button>
	)
}

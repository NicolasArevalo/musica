import React from 'react'

const Header = () => {
	return (
		<header class='w-full flex justify-between px-4 py-1 mx-auto mt-2 items-center md:max-w-3xl'>
			<div>
				<svg
					id='Capa_1'
					data-name='Capa 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 280 280'
					class='w-10 h-10'
				>
					<title>Niiico</title>
					<polygon points='92 277 117.5 78.5 163 141.5 186.5 3.5 182 216.5 132 153 92 277' />
				</svg>
			</div>
			<button class='heart'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='w-10 h-10'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
					></path>
				</svg>
			</button>
		</header>
	)
}

export default Header

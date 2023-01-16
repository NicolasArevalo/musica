const ControlesPlay = ({ estadoCancion, setEstadoCancion }) => {
	return (
		<div id='controlesPlay' class='flex items-center gap-2'>
			{estadoCancion ? (
				<svg
					id='btnPause'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='w-10 h-10'
					onClick={()=>setEstadoCancion(!estadoCancion)}
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M15.75 5.25v13.5m-7.5-13.5v13.5'
					></path>
				</svg>
			) : (
				<svg
					id='btnPlay'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='w-10 h-10'
					onClick={()=>setEstadoCancion(!estadoCancion)}
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
					></path>
				</svg>
			)}
		</div>
	)
}

export default ControlesPlay

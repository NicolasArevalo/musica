import { useEffect, useState, useRef } from 'preact/hooks'
import Header from './components/Header'
import Footer from './components/Footer'
import FullCard from './components/FullCard'
import './app.css'

import metadatos from './assets/metadata.json'
import ControlesPlay from './components/ControlesPlay'
import ControlesVolume from './components/ControlesVolume'

export function App() {
	const [cancionActual, setCancionActual] = useState({
		id: 1,
		nombre: 'Inundación de letras',
		urlName: 'inundaciondeletras',
		artista: 'niiico',
		artistaLink: 'https://niiico.com',
		feat: '',
		featLink: '',
		url: '/InundacionDeLetras.mp3',
		imgUrl: '/idl.png',
		tags: ['personal'],
		bnew: true,
	})
	const [entro, setEntro] = useState(false)
	const [estadoCancion, setEstadoCancion] = useState(false)

	const audio = useRef()
	const entrarRef = useRef()

	const cambiarCancion = prop => {
		setCancionActual({
			imgUrl: prop.imgUrl,
			artista: prop.artista,
			artistaLink: prop.artistaLink,
			feat: prop.feat,
			featLink: prop.featLink,
			nombre: prop.nombre,
			url: prop.url,
		})
		audio.current.play()
	}

	const entrar = () => setEntro(true)

	return (
		<>
			<div
				className={
					entro
						? 'hidden'
						: 'h-screen w-screen bg-slate-50 flex flex-col justify-center items-center z-50'
				}
			>
				<h3>Bienvenido a </h3>
				<h1>Musiiica</h1>
				<button ref={entrarRef} onClick={entrar} className=''>
					Entrar
				</button>
			</div>
			<div className={entro ? 'block' : 'hidden'}>
				<Header />
				<main class='w-full mx-auto p-2 md:max-w-3xl'>
					<h1 class='text-gradient w-full text-center text-red-300 hidden'>
						Musiiica
					</h1>
					<div
						id='cancion'
						class='w-full mx-auto p-2 md:max-w-3xl h-[50vh] md:h-[40vh] flex flex-col items-center justify-center'
					>
						<img
							src={cancionActual.imgUrl}
							alt={cancionActual.nombre}
							class='aspect-square w-56 shadow-lg'
						/>
						<h1 class='text-center mt-4 text-2xl font-semibold font-serif'>
							{cancionActual.nombre}
						</h1>

						<p class='text-center text-gray-600'>
							{cancionActual.feat.length > 1 ? (
								<>
									<a href={cancionActual.artistaLink}>
										{cancionActual.artista}
									</a>{' '}
									× <a href={cancionActual.featLink}>{cancionActual.feat}</a>
								</>
							) : (
								<a href={cancionActual.artistaLink}>{cancionActual.artista}</a>
							)}
						</p>
						<div className='w-full h-24 fixed bottom-0 left-0 right-0 bg-[#f1f3f4] z-10 flex items-center'>
							<audio
								ref={audio}
								controls
								src={cancionActual.url}
								className={entro ? 'w-full rounded-none my-auto' : 'hidden'}
								autoPlay
							></audio>
						</div>
					</div>
					{/* <div
					id='controles'
					class='flex items-center justify-between mx-auto w-10/12 my-6'
				>
					<ControlesPlay  estadoCancion={estadoCancion} setEstadoCancion={setEstadoCancion}/>
					<ControlesVolume />
				</div> */}
					<section>
						<header class='flex items-center gap-2'>
							<h2 class='pl-3 text-xl font-semibold'>Disponible...</h2>
						</header>

						<ul>
							{metadatos.map(
								({
									id,
									nombre,
									url,
									artista,
									feat,
									tags,
									bnew,
									artistaLink,
									featLink,
									imgUrl,
								}) => {
									if (url.length > 1)
										return (
											<FullCard
												imgUrl={imgUrl}
												id={id}
												url={url}
												artistaLink={artistaLink}
												featLink={featLink}
												brandNew={bnew}
												href={url}
												nombre={nombre}
												artista={artista}
												feat={feat}
												tags={tags}
												cambiarCancion={cambiarCancion}
											/>
										)
								}
							)}
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		</>
	)
}

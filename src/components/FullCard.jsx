import React from 'react'

const FullCard = ({
	id,
	artista,
	artistaLink,
	feat,
	featLink,
	brandNew,
	href,
	nombre,
	tags,
	url,
	cambiarCancion,
	imgUrl,
}) => {
	/* let brandNew = false */
	const estiloCard =
		'relative my-3 mx-2 border rounded-md px-4 py-3 shadow-sm hover:shadow-md ease-out duration-500 cursor-pointer'

	return (
		<li
			class={brandNew ? 'brand-new ' + estiloCard : estiloCard}
			onClick={() =>
				cambiarCancion({
					imgUrl: imgUrl,
					artista: artista,
					artistaLink: artistaLink,
					feat: feat,
					featLink: featLink,
					nombre: nombre,
					url: url,
				})
			}
		>
			{brandNew && (
				<span class='absolute top-[-12px] left-3 border-md bg-[#ff6868] px-2 rounded-lg text-sm'>
					new
				</span>
			)}
			<div>
				<h2 class='font-bold text-lg'>{nombre}</h2>
				<p class='text-gray-600'>
					{artista} {feat.length > 1 ? `× ${feat}` : ''}
				</p>

				{tags.map(tag => (
					<span class='absolute top-1 right-2 text-xs px-2 py-1 text-gray-500'>
						{tag}
					</span>
				))}
			</div>
		</li>
	)
}

export default FullCard

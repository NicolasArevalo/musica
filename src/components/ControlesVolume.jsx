import Volume from './iconos/Volume'
import VolumeMinus from './iconos/VolumeMinus'
import VolumeMore from './iconos/VolumeMore'
import VolumeMuted from './iconos/VolumeMuted'

const ControlesVolume = () => {
	return (
		<div id='controlesVolume' class='flex items-center'>
            <VolumeMinus />
			<Volume />
            <VolumeMore />
            <VolumeMuted />
		</div>
	)
}

export default ControlesVolume

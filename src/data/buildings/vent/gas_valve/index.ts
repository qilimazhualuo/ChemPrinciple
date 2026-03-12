import type { BuildItem } from '../../types'
import image from './gas_valve.png'

const gas_valve: BuildItem = {
    id: 'gas_valve',
    name: 'gas_valve',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_valve

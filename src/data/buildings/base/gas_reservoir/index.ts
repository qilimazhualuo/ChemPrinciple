import type { BuildItem } from '../../types'
import image from './gas_reservoir.png'

const gas_reservoir: BuildItem = {
    id: 'gas_reservoir',
    name: 'gas_reservoir',
    desc: '用于大量存储气体的密封容器',
    icon: '▣',
    image: image,
    width: 5,
    height: 3,
    layer: 'building',
}

export default gas_reservoir

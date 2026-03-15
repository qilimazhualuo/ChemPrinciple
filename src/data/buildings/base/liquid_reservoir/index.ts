import type { BuildItem } from '../../types'
import image from './liquid_reservoir.png'

const liquid_reservoir: BuildItem = {
    id: 'liquid_reservoir',
    name: 'liquid_reservoir',
    desc: '用于大量存储液体的密封容器',
    icon: '▣',
    image: image,
    width: 2,
    height: 3,
    layer: 'building',
}

export default liquid_reservoir

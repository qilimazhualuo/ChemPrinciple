import type { BuildItem } from '../../types'
import image from './thermoregulator.png'

const thermoregulator: BuildItem = {
    id: 'thermoregulator',
    name: 'thermoregulator',
    desc: '冷却气体的热调节器',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default thermoregulator

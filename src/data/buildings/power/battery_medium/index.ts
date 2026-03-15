import type { BuildItem } from '../../types'
import image from './battery_medium.png'

const battery_medium: BuildItem = {
    id: 'battery_medium',
    name: 'battery_medium',
    desc: '中型电池，存储中等量的电能',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default battery_medium

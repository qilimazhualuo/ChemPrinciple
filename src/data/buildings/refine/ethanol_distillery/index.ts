import type { BuildItem } from '../../types'
import image from './ethanol_distillery.png'

const ethanol_distillery: BuildItem = {
    id: 'ethanol_distillery',
    name: 'ethanol_distillery',
    desc: '将木材蒸馏为乙醇燃料',
    icon: '▣',
    image: image,
    width: 4,
    height: 3,
    layer: 'building',
}

export default ethanol_distillery

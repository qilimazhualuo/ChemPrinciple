import type { BuildItem } from '../../types'
import image from './hand_pump.png'

const hand_pump: BuildItem = {
    id: 'hand_pump',
    name: 'hand_pump',
    desc: '手动抽水泵，不需要电力',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default hand_pump

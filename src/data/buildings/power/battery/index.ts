import type { BuildItem } from '../../types'
import image from './battery.png'

const battery: BuildItem = {
    id: 'battery',
    name: 'battery',
    desc: '最基础的电池，存储少量电能',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'building',
}

export default battery

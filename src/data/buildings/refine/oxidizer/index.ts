import type { BuildItem } from '../../types'
import image from './oxidizer.png'

const oxidizer: BuildItem = {
    id: 'oxidizer',
    name: 'oxidizer',
    desc: '将材料氧化处理的设备',
    icon: '▣',
    image: image,
    width: 2,
    height: 3,
    layer: 'building',
}

export default oxidizer

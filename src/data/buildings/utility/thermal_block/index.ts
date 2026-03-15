import type { BuildItem } from '../../types'
import image from './thermal_block.png'

const thermal_block: BuildItem = {
    id: 'thermal_block',
    name: 'thermal_block',
    desc: '调节周围温度的导热板',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'background',
}

export default thermal_block

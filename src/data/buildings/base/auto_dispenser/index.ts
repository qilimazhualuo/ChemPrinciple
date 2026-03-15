import type { BuildItem } from '../../types'
import image from './auto_dispenser.png'

const auto_dispenser: BuildItem = {
    id: 'auto_dispenser',
    name: 'auto_dispenser',
    desc: '自动将存储的物品投放到指定位置',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default auto_dispenser

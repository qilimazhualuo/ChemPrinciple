import type { BuildItem } from '../../types'
import image from './wash_basin.png'

const wash_basin: BuildItem = {
    id: 'wash_basin',
    name: 'wash_basin',
    desc: '简易洗手盆，不需要管道连接',
    icon: '▣',
    image: image,
    width: 2,
    height: 3,
    layer: 'building',
}

export default wash_basin

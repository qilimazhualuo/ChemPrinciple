import type { BuildItem } from '../../types'
import image from './tile.png'

const tile: BuildItem = {
    id: 'tile',
    name: 'tile',
    desc: '最基础的建筑砖块，提供结构支撑',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default tile

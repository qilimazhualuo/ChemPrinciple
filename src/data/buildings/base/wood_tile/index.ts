import type { BuildItem } from '../../types'
import image from './wood_tile.png'

const wood_tile: BuildItem = {
    id: 'wood_tile',
    name: 'wood_tile',
    desc: '由木材制成的地砖，提高装饰值',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default wood_tile

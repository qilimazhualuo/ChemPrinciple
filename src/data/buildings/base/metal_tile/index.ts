import type { BuildItem } from '../../types'
import image from './metal_tile.png'

const metal_tile: BuildItem = {
    id: 'metal_tile',
    name: 'metal_tile',
    desc: '由金属制成的坚固地砖，提高装饰值',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default metal_tile

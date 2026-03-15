import type { BuildItem } from '../../types'
import image from './window_tile.png'

const window_tile: BuildItem = {
    id: 'window_tile',
    name: 'window_tile',
    desc: '透明的玻璃砖块，允许光线通过',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default window_tile

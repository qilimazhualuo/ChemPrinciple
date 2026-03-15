import type { BuildItem } from '../../types'
import image from './storage_tile.png'

const storage_tile: BuildItem = {
    id: 'storage_tile',
    name: 'storage_tile',
    desc: '可以存储固体物品的特殊砖块',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default storage_tile

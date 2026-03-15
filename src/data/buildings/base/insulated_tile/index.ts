import type { BuildItem } from '../../types'
import image from './insulated_tile.png'

const insulated_tile: BuildItem = {
    id: 'insulated_tile',
    name: 'insulated_tile',
    desc: '具有隔热性能的砖块，减少热量传导',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default insulated_tile

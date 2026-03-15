import type { BuildItem } from '../../types'
import image from './bunker_tile.png'

const bunker_tile: BuildItem = {
    id: 'bunker_tile',
    name: 'bunker_tile',
    desc: '能够抵御陨石撞击的超厚装甲砖块',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default bunker_tile

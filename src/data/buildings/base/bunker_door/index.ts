import type { BuildItem } from '../../types'
import image from './bunker_door.png'

const bunker_door: BuildItem = {
    id: 'bunker_door',
    name: 'bunker_door',
    desc: '能够抵御陨石撞击的超厚装甲门',
    icon: '▣',
    image: image,
    width: 4,
    height: 1,
    layer: 'building',
}

export default bunker_door

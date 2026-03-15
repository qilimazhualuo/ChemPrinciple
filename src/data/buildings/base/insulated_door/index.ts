import type { BuildItem } from '../../types'
import image from './insulated_door.png'

const insulated_door: BuildItem = {
    id: 'insulated_door',
    name: 'insulated_door',
    desc: '具有隔热性能的门，减少热量传导',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default insulated_door

import type { BuildItem } from '../../types'
import image from './pressure_plate.png'

const pressure_plate: BuildItem = {
    id: 'pressure_plate',
    name: 'pressure_plate',
    desc: '检测上方是否有重物的压力板',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default pressure_plate

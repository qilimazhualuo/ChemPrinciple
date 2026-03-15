import type { BuildItem } from '../../types'
import image from './space_heater.png'

const space_heater: BuildItem = {
    id: 'space_heater',
    name: 'space_heater',
    desc: '加热周围环境的电暖气',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default space_heater

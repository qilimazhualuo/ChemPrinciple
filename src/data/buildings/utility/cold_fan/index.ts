import type { BuildItem } from '../../types'
import image from './cold_fan.png'

const cold_fan: BuildItem = {
    id: 'cold_fan',
    name: 'cold_fan',
    desc: '通过冰块冷却环境的风扇',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default cold_fan

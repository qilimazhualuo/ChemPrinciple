import type { BuildItem } from '../../types'
import image from './power_switch.png'

const power_switch: BuildItem = {
    id: 'power_switch',
    name: 'power_switch',
    desc: '手动控制电路通断的开关',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default power_switch

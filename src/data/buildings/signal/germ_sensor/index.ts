import type { BuildItem } from '../../types'
import image from './germ_sensor.png'

const germ_sensor: BuildItem = {
    id: 'germ_sensor',
    name: 'germ_sensor',
    desc: '检测环境中细菌浓度的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default germ_sensor

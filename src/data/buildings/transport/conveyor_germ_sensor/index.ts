import type { BuildItem } from '../../types'
import image from './conveyor_germ_sensor.png'

const conveyor_germ_sensor: BuildItem = {
    id: 'conveyor_germ_sensor',
    name: 'conveyor_germ_sensor',
    desc: '检测运输轨道上物品细菌的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default conveyor_germ_sensor

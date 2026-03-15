import type { BuildItem } from '../../types'
import image from './conveyor_element_sensor.png'

const conveyor_element_sensor: BuildItem = {
    id: 'conveyor_element_sensor',
    name: 'conveyor_element_sensor',
    desc: '检测运输轨道上物品元素的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default conveyor_element_sensor

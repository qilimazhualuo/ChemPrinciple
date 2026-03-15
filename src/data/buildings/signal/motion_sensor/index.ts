import type { BuildItem } from '../../types'
import image from './motion_sensor.png'

const motion_sensor: BuildItem = {
    id: 'motion_sensor',
    name: 'motion_sensor',
    desc: '检测移动物体的运动传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default motion_sensor

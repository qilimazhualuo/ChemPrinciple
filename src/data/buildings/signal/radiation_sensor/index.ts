import type { BuildItem } from '../../types'
import image from './radiation_sensor.png'

const radiation_sensor: BuildItem = {
    id: 'radiation_sensor',
    name: 'radiation_sensor',
    desc: '检测环境辐射强度的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default radiation_sensor

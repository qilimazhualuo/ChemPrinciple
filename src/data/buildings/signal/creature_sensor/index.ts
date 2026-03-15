import type { BuildItem } from '../../types'
import image from './creature_sensor.png'

const creature_sensor: BuildItem = {
    id: 'creature_sensor',
    name: 'creature_sensor',
    desc: '检测附近是否有小动物的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default creature_sensor

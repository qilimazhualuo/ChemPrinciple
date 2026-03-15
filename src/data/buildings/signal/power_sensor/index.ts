import type { BuildItem } from '../../types'
import image from './power_sensor.png'

const power_sensor: BuildItem = {
    id: 'power_sensor',
    name: 'power_sensor',
    desc: '检测电网电量状态的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default power_sensor

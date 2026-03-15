import type { BuildItem } from '../../types'
import image from './duplicant_sensor.png'

const duplicant_sensor: BuildItem = {
    id: 'duplicant_sensor',
    name: 'duplicant_sensor',
    desc: '检测附近是否有复制人的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default duplicant_sensor

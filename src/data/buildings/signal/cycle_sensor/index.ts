import type { BuildItem } from '../../types'
import image from './cycle_sensor.png'

const cycle_sensor: BuildItem = {
    id: 'cycle_sensor',
    name: 'cycle_sensor',
    desc: '按照游戏周期定时发送信号',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default cycle_sensor

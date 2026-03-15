import type { BuildItem } from '../../types'
import image from './timer_sensor.png'

const timer_sensor: BuildItem = {
    id: 'timer_sensor',
    name: 'timer_sensor',
    desc: '按设定时间间隔发送信号的计时器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default timer_sensor

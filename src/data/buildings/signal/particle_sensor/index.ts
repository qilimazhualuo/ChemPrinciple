import type { BuildItem } from '../../types'
import image from './particle_sensor.png'

const particle_sensor: BuildItem = {
    id: 'particle_sensor',
    name: 'particle_sensor',
    desc: '检测辐射粒子的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default particle_sensor

import type { BuildItem } from '../../types'
import image from './conveyor_shutoff.png'

const conveyor_shutoff: BuildItem = {
    id: 'conveyor_shutoff',
    name: 'conveyor_shutoff',
    desc: '通过自动化信号控制运输轨道通断',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default conveyor_shutoff

import type { BuildItem } from '../../types'
import image from './signal_receiver.png'

const signal_receiver: BuildItem = {
    id: 'signal_receiver',
    name: 'signal_receiver',
    desc: '接收无线自动化信号的接收器',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'automation',
}

export default signal_receiver

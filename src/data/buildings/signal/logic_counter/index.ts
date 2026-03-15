import type { BuildItem } from '../../types'
import image from './logic_counter.png'

const logic_counter: BuildItem = {
    id: 'logic_counter',
    name: 'logic_counter',
    desc: '计数输入信号脉冲次数的计数器',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'automation',
}

export default logic_counter

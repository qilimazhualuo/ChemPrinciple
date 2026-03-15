import type { BuildItem } from '../../types'
import image from './logic_memory.png'

const logic_memory: BuildItem = {
    id: 'logic_memory',
    name: 'logic_memory',
    desc: '存储自动化信号状态的记忆单元',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'automation',
}

export default logic_memory

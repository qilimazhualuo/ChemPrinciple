import type { BuildItem } from '../../types'
import image from './logic_buffer.png'

const logic_buffer: BuildItem = {
    id: 'logic_buffer',
    name: 'logic_buffer',
    desc: '延迟传递信号的缓冲门',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default logic_buffer

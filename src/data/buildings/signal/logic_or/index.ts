import type { BuildItem } from '../../types'
import image from './logic_or.png'

const logic_or: BuildItem = {
    id: 'logic_or',
    name: 'logic_or',
    desc: '任一输入为真则输出为真的逻辑或门',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default logic_or

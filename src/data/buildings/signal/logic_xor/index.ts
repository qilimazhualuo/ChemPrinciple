import type { BuildItem } from '../../types'
import image from './logic_xor.png'

const logic_xor: BuildItem = {
    id: 'logic_xor',
    name: 'logic_xor',
    desc: '仅一个输入为真时输出为真的异或门',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'automation',
}

export default logic_xor

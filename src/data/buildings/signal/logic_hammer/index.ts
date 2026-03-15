import type { BuildItem } from '../../types'
import image from './logic_hammer.png'

const logic_hammer: BuildItem = {
    id: 'logic_hammer',
    name: 'logic_hammer',
    desc: '通过自动化信号触发物理撞击',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'automation',
}

export default logic_hammer

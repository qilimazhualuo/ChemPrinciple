import type { BuildItem } from '../../types'
import image from './cargo_unpacker.png'

const cargo_unpacker: BuildItem = {
    id: 'cargo_unpacker',
    name: 'cargo_unpacker',
    desc: '拆卸火箭货舱并取出物资',
    icon: '▣',
    image: image,
    width: 3,
    height: 2,
    layer: 'building',
}

export default cargo_unpacker

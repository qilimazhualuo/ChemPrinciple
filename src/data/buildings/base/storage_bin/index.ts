import type { BuildItem } from '../../types'
import image from './storage_bin.png'

const storage_bin: BuildItem = {
    id: 'storage_bin',
    name: 'storage_bin',
    desc: '用于存储固体材料的基础储物箱',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default storage_bin

import type { BuildItem } from '../../types'
import image from './sauna.png'

const sauna: BuildItem = {
    id: 'sauna',
    name: 'sauna',
    desc: '蒸汽桑拿房，缓解压力',
    icon: '▣',
    image: image,
    width: 3,
    height: 3,
    layer: 'building',
}

export default sauna

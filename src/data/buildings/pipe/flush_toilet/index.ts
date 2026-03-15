import type { BuildItem } from '../../types'
import image from './flush_toilet.png'

const flush_toilet: BuildItem = {
    id: 'flush_toilet',
    name: 'flush_toilet',
    desc: '复制人使用的冲水马桶，产生污水',
    icon: '▣',
    image: image,
    width: 2,
    height: 3,
    layer: 'building',
}

export default flush_toilet

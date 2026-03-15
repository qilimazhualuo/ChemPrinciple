import type { BuildItem } from '../../types'
import image from './transformer.png'

const transformer: BuildItem = {
    id: 'transformer',
    name: 'transformer',
    desc: '将高压电转换为低压电的变压器',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default transformer

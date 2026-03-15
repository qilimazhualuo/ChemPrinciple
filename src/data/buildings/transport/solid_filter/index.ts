import type { BuildItem } from '../../types'
import image from './solid_filter.png'

const solid_filter: BuildItem = {
    id: 'solid_filter',
    name: 'solid_filter',
    desc: '按元素类型过滤运输轨道上的固体',
    icon: '▣',
    image: image,
    width: 3,
    height: 1,
    layer: 'building',
}

export default solid_filter

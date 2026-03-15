import type { BuildItem } from '../../types'
import image from './gas_filter.png'

const gas_filter: BuildItem = {
    id: 'gas_filter',
    name: 'gas_filter',
    desc: '按元素类型过滤气体的过滤器',
    icon: '▣',
    image: image,
    width: 3,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_filter

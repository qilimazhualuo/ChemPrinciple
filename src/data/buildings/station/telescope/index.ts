import type { BuildItem } from '../../types'
import image from './telescope.png'

const telescope: BuildItem = {
    id: 'telescope',
    name: 'telescope',
    desc: '观测太空星体的望远镜',
    icon: '▣',
    image: image,
    width: 4,
    height: 4,
    layer: 'building',
}

export default telescope

import type { BuildItem } from '../../types'
import image from './hydrogen_generator.png'

const hydrogen_generator: BuildItem = {
    id: 'hydrogen_generator',
    name: 'hydrogen_generator',
    desc: '燃烧氢气产生电力，副产物为水',
    icon: '▣',
    image: image,
    width: 4,
    height: 3,
    layer: 'building',
}

export default hydrogen_generator

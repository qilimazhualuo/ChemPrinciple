import type { BuildItem } from '../../types'
import image from './peat_generator.png'

const peat_generator: BuildItem = {
    id: 'peat_generator',
    name: 'peat_generator',
    desc: '燃烧泥炭产生电力',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default peat_generator

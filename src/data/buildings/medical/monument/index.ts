import type { BuildItem } from '../../types'
import image from './monument.png'

const monument: BuildItem = {
    id: 'monument',
    name: 'monument',
    desc: '纪念殖民地成就的大型纪念碑',
    icon: '▣',
    image: image,
    width: 5,
    height: 3,
    layer: 'building',
}

export default monument

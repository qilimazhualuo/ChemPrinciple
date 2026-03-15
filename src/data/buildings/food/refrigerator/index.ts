import type { BuildItem } from '../../types'
import image from './refrigerator.png'

const refrigerator: BuildItem = {
    id: 'refrigerator',
    name: 'refrigerator',
    desc: '低温储存食物防止变质的冰箱',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default refrigerator

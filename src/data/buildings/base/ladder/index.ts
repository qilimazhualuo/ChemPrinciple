import type { BuildItem } from '../../types'
import image from './ladder.png'

const ladder: BuildItem = {
    id: 'ladder',
    name: 'ladder',
    desc: '允许复制人上下攀爬的基础梯子',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'road',
}

export default ladder

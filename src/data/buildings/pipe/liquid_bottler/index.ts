import type { BuildItem } from '../../types'
import image from './liquid_bottler.png'

const liquid_bottler: BuildItem = {
    id: 'liquid_bottler',
    name: 'liquid_bottler',
    desc: '将管道中的液体装入瓶中',
    icon: '▣',
    image: image,
    width: 3,
    height: 2,
    layer: 'building',
}

export default liquid_bottler

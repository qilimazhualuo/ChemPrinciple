import type { BuildItem } from '../../types'
import image from './minipod.png'

const minipod: BuildItem = {
    id: 'minipod',
    name: 'minipod',
    desc: '打印舱，可以打印新的复制人和物资',
    icon: '▣',
    image: image,
    width: 4,
    height: 4,
    layer: 'building',
}

export default minipod

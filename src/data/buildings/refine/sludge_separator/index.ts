import type { BuildItem } from '../../types'
import image from './sludge_separator.png'

const sludge_separator: BuildItem = {
    id: 'sludge_separator',
    name: 'sludge_separator',
    desc: '分离淤泥中的不同成分',
    icon: '▣',
    image: image,
    width: 4,
    height: 3,
    layer: 'building',
}

export default sludge_separator

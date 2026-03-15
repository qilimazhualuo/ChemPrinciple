import type { BuildItem } from '../../types'
import image from './outhouse.png'

const outhouse: BuildItem = {
    id: 'outhouse',
    name: 'outhouse',
    desc: '不需要管道的简易厕所',
    icon: '▣',
    image: image,
    width: 2,
    height: 3,
    layer: 'building',
}

export default outhouse

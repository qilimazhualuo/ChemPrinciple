import type { BuildItem } from '../../types'
import image from './fire_pole.png'

const fire_pole: BuildItem = {
    id: 'fire_pole',
    name: 'fire_pole',
    desc: '允许复制人快速向下滑行的消防杆',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'road',
}

export default fire_pole

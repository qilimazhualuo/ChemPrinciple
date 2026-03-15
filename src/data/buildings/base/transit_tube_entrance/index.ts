import type { BuildItem } from '../../types'
import image from './transit_tube_entrance.png'

const transit_tube_entrance: BuildItem = {
    id: 'transit_tube_entrance',
    name: 'transit_tube_entrance',
    desc: '运输管道的入口，复制人从此进入管道',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'road',
}

export default transit_tube_entrance

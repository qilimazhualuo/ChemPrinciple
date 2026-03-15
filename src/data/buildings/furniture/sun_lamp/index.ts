import type { BuildItem } from '../../types'
import image from './sun_lamp.png'

const sun_lamp: BuildItem = {
    id: 'sun_lamp',
    name: 'sun_lamp',
    desc: '模拟太阳光的大型照明灯',
    icon: '▣',
    image: image,
    width: 2,
    height: 4,
    layer: 'building',
}

export default sun_lamp

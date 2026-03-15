import type { BuildItem } from '../../types'
import image from './mechanical_airlock.png'

const mechanical_airlock: BuildItem = {
    id: 'mechanical_airlock',
    name: 'mechanical_airlock',
    desc: '自动开关的机械气密门，需要电力',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default mechanical_airlock

import type { BuildItem } from '../../types'
import image from './bed.png'

const bed: BuildItem = {
    id: 'bed',
    name: 'bed',
    desc: '基础床铺，复制人睡觉休息的地方',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default bed

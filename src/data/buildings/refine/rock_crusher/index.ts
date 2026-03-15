import type { BuildItem } from '../../types'
import image from './rock_crusher.png'

const rock_crusher: BuildItem = {
    id: 'rock_crusher',
    name: 'rock_crusher',
    desc: '将岩石粉碎成沙子和矿物',
    icon: '▣',
    image: image,
    width: 4,
    height: 4,
    layer: 'building',
}

export default rock_crusher

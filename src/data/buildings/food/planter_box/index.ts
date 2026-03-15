import type { BuildItem } from '../../types'
import image from './planter_box.png'

const planter_box: BuildItem = {
    id: 'planter_box',
    name: 'planter_box',
    desc: '放置在地面上的简易花盆',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'building',
}

export default planter_box

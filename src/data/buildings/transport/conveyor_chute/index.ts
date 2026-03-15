import type { BuildItem } from '../../types'
import image from './conveyor_chute.png'

const conveyor_chute: BuildItem = {
    id: 'conveyor_chute',
    name: 'conveyor_chute',
    desc: '将运输轨道上的物品投放出来',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'building',
}

export default conveyor_chute

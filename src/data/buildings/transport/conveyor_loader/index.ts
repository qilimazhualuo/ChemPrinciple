import type { BuildItem } from '../../types'
import image from './conveyor_loader.png'

const conveyor_loader: BuildItem = {
    id: 'conveyor_loader',
    name: 'conveyor_loader',
    desc: '将物品装载到运输轨道上',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default conveyor_loader

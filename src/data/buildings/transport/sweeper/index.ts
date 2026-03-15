import type { BuildItem } from '../../types'
import image from './sweeper.png'

const sweeper: BuildItem = {
    id: 'sweeper',
    name: 'sweeper',
    desc: '自动拾取附近掉落物品的机械臂',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'building',
}

export default sweeper

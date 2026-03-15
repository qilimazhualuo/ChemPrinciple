import type { BuildItem } from '../../types'
import image from './creature_feeder.png'

const creature_feeder: BuildItem = {
    id: 'creature_feeder',
    name: 'creature_feeder',
    desc: '为小动物提供食物的喂食槽',
    icon: '▣',
    image: image,
    width: 3,
    height: 1,
    layer: 'building',
}

export default creature_feeder

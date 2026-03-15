import type { BuildItem } from '../../types'
import image from './ranch_station.png'

const ranch_station: BuildItem = {
    id: 'ranch_station',
    name: 'ranch_station',
    desc: '牧场管理站，复制人在此照料小动物',
    icon: '▣',
    image: image,
    width: 2,
    height: 3,
    layer: 'building',
}

export default ranch_station

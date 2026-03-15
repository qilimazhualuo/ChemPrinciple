import type { BuildItem } from '../../types'
import image from './farm_station.png'

const farm_station: BuildItem = {
    id: 'farm_station',
    name: 'farm_station',
    desc: '农业研究站，提升附近农作物产量',
    icon: '▣',
    image: image,
    width: 2,
    height: 3,
    layer: 'building',
}

export default farm_station

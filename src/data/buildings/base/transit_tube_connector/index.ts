import type { BuildItem } from '../../types'
import image from './transit_tube_connector.png'

const transit_tube_connector: BuildItem = {
    id: 'transit_tube_connector',
    name: 'transit_tube_connector',
    desc: '连接不同方向运输管道的接口',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'road',
}

export default transit_tube_connector

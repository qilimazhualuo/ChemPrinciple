import type { BuildItem } from '../../types'
import image from './power_control_station.png'

const power_control_station: BuildItem = {
    id: 'power_control_station',
    name: 'power_control_station',
    desc: '电力调优工作站，提升发电机效率',
    icon: '▣',
    image: image,
    width: 2,
    height: 4,
    layer: 'building',
}

export default power_control_station

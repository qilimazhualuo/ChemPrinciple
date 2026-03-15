import type { BuildItem } from '../../types'
import image from './gas_conduit_meter.png'

const gas_conduit_meter: BuildItem = {
    id: 'gas_conduit_meter',
    name: 'gas_conduit_meter',
    desc: '显示管道中气体流量的计量器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_conduit_meter

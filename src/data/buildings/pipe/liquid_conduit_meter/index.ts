import type { BuildItem } from '../../types'
import image from './liquid_conduit_meter.png'

const liquid_conduit_meter: BuildItem = {
    id: 'liquid_conduit_meter',
    name: 'liquid_conduit_meter',
    desc: '显示管道中液体流量的计量器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'liquid_pipe',
}

export default liquid_conduit_meter

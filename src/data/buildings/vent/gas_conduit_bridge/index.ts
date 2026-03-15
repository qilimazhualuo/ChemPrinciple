import type { BuildItem } from '../../types'
import image from './gas_conduit_bridge.png'

const gas_conduit_bridge: BuildItem = {
    id: 'gas_conduit_bridge',
    name: 'gas_conduit_bridge',
    desc: '跨越其他管道的气体管道桥',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_conduit_bridge

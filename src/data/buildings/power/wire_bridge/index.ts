import type { BuildItem } from '../../types'
import image from './wire_bridge.png'

const wire_bridge: BuildItem = {
    id: 'wire_bridge',
    name: 'wire_bridge',
    desc: '跨越其他电线的电线桥',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'wire',
}

export default wire_bridge

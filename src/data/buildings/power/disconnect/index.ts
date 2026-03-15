import type { BuildItem } from '../../types'
import image from './disconnect.png'

const disconnect: BuildItem = {
    id: 'disconnect',
    name: 'disconnect',
    desc: '用于断开电线连接的节点',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'wire',
}

export default disconnect

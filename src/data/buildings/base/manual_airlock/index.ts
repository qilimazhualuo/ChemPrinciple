import type { BuildItem } from '../../types'
import image from './manual_airlock.png'

const manual_airlock: BuildItem = {
    id: 'manual_airlock',
    name: 'manual_airlock',
    desc: '需要手动操作的气密门',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default manual_airlock

import type { BuildItem } from '../../types'
import image from './fish_trap.png'

const fish_trap: BuildItem = {
    id: 'fish_trap',
    name: 'fish_trap',
    desc: '捕捉水生动物的陷阱',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'building',
}

export default fish_trap

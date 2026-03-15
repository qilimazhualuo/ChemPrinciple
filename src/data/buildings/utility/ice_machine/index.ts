import type { BuildItem } from '../../types'
import image from './ice_machine.png'

const ice_machine: BuildItem = {
    id: 'ice_machine',
    name: 'ice_machine',
    desc: '制造冰块用于冷却的设备',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default ice_machine

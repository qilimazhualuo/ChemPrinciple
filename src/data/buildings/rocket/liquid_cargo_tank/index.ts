import type { BuildItem } from '../../types'
import image from './liquid_cargo_tank.png'

const liquid_cargo_tank: BuildItem = {
    id: 'liquid_cargo_tank',
    name: 'liquid_cargo_tank',
    desc: '火箭用液体货舱',
    icon: '▣',
    image: image,
    width: 5,
    height: 2,
    layer: 'building',
}

export default liquid_cargo_tank

import type { BuildItem } from '../../types'
import image from './pneumatic_door.png'

const pneumatic_door: BuildItem = {
    id: 'pneumatic_door',
    name: 'pneumatic_door',
    desc: '基础气动门，复制人可通过',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default pneumatic_door

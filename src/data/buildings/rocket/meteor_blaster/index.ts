import type { BuildItem } from '../../types'
import image from './meteor_blaster.png'

const meteor_blaster: BuildItem = {
    id: 'meteor_blaster',
    name: 'meteor_blaster',
    desc: '射击并摧毁来袭陨石的防御炮',
    icon: '▣',
    image: image,
    width: 3,
    height: 3,
    layer: 'building',
}

export default meteor_blaster

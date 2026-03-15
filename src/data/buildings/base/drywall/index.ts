import type { BuildItem } from '../../types'
import image from './drywall.png'

const drywall: BuildItem = {
    id: 'drywall',
    name: 'drywall',
    desc: '阻止气体和液体穿过的背景墙',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'background',
}

export default drywall

import type { BuildItem } from '../../types'
import image from './metal_refinery.png'

const metal_refinery: BuildItem = {
    id: 'metal_refinery',
    name: 'metal_refinery',
    desc: '将矿石冶炼为精炼金属，产生大量热量',
    icon: '▣',
    image: image,
    width: 5,
    height: 4,
    layer: 'building',
}

export default metal_refinery

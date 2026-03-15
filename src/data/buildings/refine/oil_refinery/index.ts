import type { BuildItem } from '../../types'
import image from './oil_refinery.png'

const oil_refinery: BuildItem = {
    id: 'oil_refinery',
    name: 'oil_refinery',
    desc: '将原油精炼为石油和天然气',
    icon: '▣',
    image: image,
    width: 4,
    height: 5,
    layer: 'building',
}

export default oil_refinery

import type { BuildItem } from '../../types'
import image from './pedestal.png'

const pedestal: BuildItem = {
    id: 'pedestal',
    name: 'pedestal',
    desc: '展示物品的基座',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default pedestal

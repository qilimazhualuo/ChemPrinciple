import type { BuildItem } from '../../types'
import image from './oil_well.png'

const oil_well: BuildItem = {
    id: 'oil_well',
    name: 'oil_well',
    desc: '地下石油矿井',
    icon: '▣',
    image: image,
    width: 4,
    height: 4,
    layer: 'building',
}

export default oil_well

import type { BuildItem } from '../../types'
import image from './beacon.png'

const beacon: BuildItem = {
    id: 'beacon',
    name: 'beacon',
    desc: '太空导航信标',
    icon: '▣',
    image: image,
    width: 1,
    height: 3,
    layer: 'building',
}

export default beacon

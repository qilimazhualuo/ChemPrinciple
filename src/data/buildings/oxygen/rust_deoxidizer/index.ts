import type { BuildItem } from '../../types'
import image from './rust_deoxidizer.png'

const rust_deoxidizer: BuildItem = {
    id: 'rust_deoxidizer',
    name: 'rust_deoxidizer',
    desc: '利用铁锈和盐产生氧气',
    icon: '▣',
    image: image,
    width: 4,
    height: 2,
    layer: 'building',
}

export default rust_deoxidizer

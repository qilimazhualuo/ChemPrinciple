import type { BuildItem } from '../../types'
import image from './apothecary.png'

const apothecary: BuildItem = {
    id: 'apothecary',
    name: 'apothecary',
    desc: '制作药物和医疗用品的药剂台',
    icon: '▣',
    image: image,
    width: 3,
    height: 2,
    layer: 'building',
}

export default apothecary

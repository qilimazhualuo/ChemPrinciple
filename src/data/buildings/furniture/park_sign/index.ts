import type { BuildItem } from '../../types'
import image from './park_sign.png'

const park_sign: BuildItem = {
    id: 'park_sign',
    name: 'park_sign',
    desc: '标记公园区域的标志牌',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default park_sign

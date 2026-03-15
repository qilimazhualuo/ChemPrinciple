import type { BuildItem } from '../../types'
import image from './canvas_blank.png'

const canvas_blank: BuildItem = {
    id: 'canvas_blank',
    name: 'canvas_blank',
    desc: '空白画布，等待艺术家创作',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'background',
}

export default canvas_blank

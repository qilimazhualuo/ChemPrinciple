import type { BuildItem } from '../../types'
import image from './canvas.png'

const canvas: BuildItem = {
    id: 'canvas',
    name: 'canvas',
    desc: '可以绘画的画布',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'background',
}

export default canvas

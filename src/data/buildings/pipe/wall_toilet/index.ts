import type { BuildItem } from '../../types'
import image from './wall_toilet.png'

const wall_toilet: BuildItem = {
    id: 'wall_toilet',
    name: 'wall_toilet',
    desc: '安装在墙壁上的紧凑型马桶',
    icon: '▣',
    image: image,
    width: 1,
    height: 3,
    layer: 'building',
}

export default wall_toilet

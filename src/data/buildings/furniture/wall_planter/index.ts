import type { BuildItem } from '../../types'
import image from './wall_planter.png'

const wall_planter: BuildItem = {
    id: 'wall_planter',
    name: 'wall_planter',
    desc: '安装在墙壁上的装饰花盆',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'background',
}

export default wall_planter

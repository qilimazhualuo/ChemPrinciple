import type { BuildItem } from '../../types'
import image from './steam_turbine.png'

const steam_turbine: BuildItem = {
    id: 'steam_turbine',
    name: 'steam_turbine',
    desc: '利用高温蒸汽发电的大型涡轮机',
    icon: '▣',
    image: image,
    width: 5,
    height: 3,
    layer: 'building',
}

export default steam_turbine

import type { BuildItem } from '../../types'
import image from './solar_panel.png'

const solar_panel: BuildItem = {
    id: 'solar_panel',
    name: 'solar_panel',
    desc: '利用太阳光发电的面板，需要直接光照',
    icon: '▣',
    image: image,
    width: 7,
    height: 3,
    layer: 'building',
}

export default solar_panel

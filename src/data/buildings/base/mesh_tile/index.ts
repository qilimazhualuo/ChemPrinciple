import type { BuildItem } from '../../types'
import image from './mesh_tile.png'

const mesh_tile: BuildItem = {
    id: 'mesh_tile',
    name: 'mesh_tile',
    desc: '允许液体和气体通过的网格砖块',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default mesh_tile

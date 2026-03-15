import type { BuildItem } from '../../types'
import image from './petroleum_engine.png'

const petroleum_engine: BuildItem = {
    id: 'petroleum_engine',
    name: 'petroleum_engine',
    desc: '使用石油推进的火箭引擎',
    icon: '▣',
    image: image,
    width: 7,
    height: 5,
    layer: 'building',
}

export default petroleum_engine

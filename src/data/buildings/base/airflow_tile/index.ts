import type { BuildItem } from '../../types'
import image from './airflow_tile.png'

const airflow_tile: BuildItem = {
    id: 'airflow_tile',
    name: 'airflow_tile',
    desc: '允许气体通过的透气砖块，同时保持结构完整性',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'tile',
}

export default airflow_tile

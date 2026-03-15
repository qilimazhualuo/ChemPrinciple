import type { BuildItem } from '../../types'
import image from './water_sieve.png'

const water_sieve: BuildItem = {
    id: 'water_sieve',
    name: 'water_sieve',
    desc: '将污水过滤为干净的水',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default water_sieve

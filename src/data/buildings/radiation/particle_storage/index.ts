import type { BuildItem } from '../../types'
import image from './particle_storage.png'

const particle_storage: BuildItem = {
    id: 'particle_storage',
    name: 'particle_storage',
    desc: '存储辐射粒子的容器',
    icon: '▣',
    image: image,
    width: 1,
    height: 2,
    layer: 'building',
}

export default particle_storage

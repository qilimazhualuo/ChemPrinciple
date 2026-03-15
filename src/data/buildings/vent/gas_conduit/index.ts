import type { BuildItem } from '../../types'
import image from './gas_conduit.png'

const gas_conduit: BuildItem = {
    id: 'gas_conduit',
    name: 'gas_conduit',
    desc: '传输气体的基础管道',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_conduit

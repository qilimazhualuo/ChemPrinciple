import type { BuildItem } from '../../types'
import image from './liquid_conduit.png'

const liquid_conduit: BuildItem = {
    id: 'liquid_conduit',
    name: 'liquid_conduit',
    desc: '传输液体的基础管道',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'liquid_pipe',
}

export default liquid_conduit

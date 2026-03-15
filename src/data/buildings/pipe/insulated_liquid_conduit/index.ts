import type { BuildItem } from '../../types'
import image from './insulated_liquid_conduit.png'

const insulated_liquid_conduit: BuildItem = {
    id: 'insulated_liquid_conduit',
    name: 'insulated_liquid_conduit',
    desc: '隔热的液体管道，减少热量传导',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'liquid_pipe',
}

export default insulated_liquid_conduit

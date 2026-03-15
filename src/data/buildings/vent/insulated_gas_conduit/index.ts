import type { BuildItem } from '../../types'
import image from './insulated_gas_conduit.png'

const insulated_gas_conduit: BuildItem = {
    id: 'insulated_gas_conduit',
    name: 'insulated_gas_conduit',
    desc: '隔热的气体管道，减少热量传导',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default insulated_gas_conduit

import type { BuildItem } from '../../types'
import image from './gas_conduit_thermal.png'

const gas_conduit_thermal: BuildItem = {
    id: 'gas_conduit_thermal',
    name: 'gas_conduit_thermal',
    desc: '与环境交换热量的导热气体管道',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_conduit_thermal

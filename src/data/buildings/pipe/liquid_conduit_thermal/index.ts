import type { BuildItem } from '../../types'
import image from './liquid_conduit_thermal.png'

const liquid_conduit_thermal: BuildItem = {
    id: 'liquid_conduit_thermal',
    name: 'liquid_conduit_thermal',
    desc: '与环境交换热量的导热液体管道',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'liquid_pipe',
}

export default liquid_conduit_thermal

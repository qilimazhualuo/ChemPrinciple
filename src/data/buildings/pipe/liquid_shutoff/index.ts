import type { BuildItem } from '../../types'
import image from './liquid_shutoff.png'

const liquid_shutoff: BuildItem = {
    id: 'liquid_shutoff',
    name: 'liquid_shutoff',
    desc: '通过自动化信号控制液体通断',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'liquid_pipe',
}

export default liquid_shutoff

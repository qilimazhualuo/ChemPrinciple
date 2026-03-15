import type { BuildItem } from '../../types'
import image from './gas_shutoff.png'

const gas_shutoff: BuildItem = {
    id: 'gas_shutoff',
    name: 'gas_shutoff',
    desc: '通过自动化信号控制气体通断',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_shutoff

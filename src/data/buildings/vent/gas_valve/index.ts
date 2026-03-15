import type { BuildItem } from '../../types'
import image from './gas_valve.png'

const gas_valve: BuildItem = {
    id: 'gas_valve',
    name: 'gas_valve',
    desc: '控制气体管道流量的阀门',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_valve

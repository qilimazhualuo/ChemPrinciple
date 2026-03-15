import type { BuildItem } from '../../types'
import image from './gas_conduit_germ_sensor.png'

const gas_conduit_germ_sensor: BuildItem = {
    id: 'gas_conduit_germ_sensor',
    name: 'gas_conduit_germ_sensor',
    desc: '检测管道中气体细菌数量的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'gas_pipe',
}

export default gas_conduit_germ_sensor

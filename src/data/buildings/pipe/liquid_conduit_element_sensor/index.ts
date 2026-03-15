import type { BuildItem } from '../../types'
import image from './liquid_conduit_element_sensor.png'

const liquid_conduit_element_sensor: BuildItem = {
    id: 'liquid_conduit_element_sensor',
    name: 'liquid_conduit_element_sensor',
    desc: '检测管道中液体元素种类的传感器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'liquid_pipe',
}

export default liquid_conduit_element_sensor

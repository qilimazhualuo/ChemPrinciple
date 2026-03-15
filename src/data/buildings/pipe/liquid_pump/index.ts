import type { BuildItem } from '../../types'
import image from './liquid_pump.png'

const liquid_pump: BuildItem = {
    id: 'liquid_pump',
    name: 'liquid_pump',
    desc: '将环境中的液体抽入管道系统',
    icon: '▣',
    image: image,
    width: 2,
    height: 2,
    layer: 'building',
}

export default liquid_pump

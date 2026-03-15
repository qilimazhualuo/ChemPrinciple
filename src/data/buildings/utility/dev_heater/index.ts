import type { BuildItem } from '../../types'
import image from './dev_heater.png'

const dev_heater: BuildItem = {
    id: 'dev_heater',
    name: 'dev_heater',
    desc: '开发者调试用的加热器',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'building',
}

export default dev_heater

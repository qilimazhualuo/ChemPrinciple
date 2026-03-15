import type { BuildItem } from '../../types'
import image from './ceiling_light.png'

const ceiling_light: BuildItem = {
    id: 'ceiling_light',
    name: 'ceiling_light',
    desc: '安装在天花板上的基础照明灯',
    icon: '▣',
    image: image,
    width: 1,
    height: 1,
    layer: 'background',
}

export default ceiling_light

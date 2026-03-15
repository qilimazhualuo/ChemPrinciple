import type { BuildItem } from '../../types'
import image from './research_reactor.png'

const research_reactor: BuildItem = {
    id: 'research_reactor',
    name: 'research_reactor',
    desc: '利用核裂变产生辐射粒子和热量的反应堆',
    icon: '▣',
    image: image,
    width: 5,
    height: 6,
    layer: 'building',
}

export default research_reactor

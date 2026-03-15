import type { BuildCategory } from '../types'
import particle_storage from './particle_storage'
import research_reactor from './research_reactor'
import dev_particle_generator from './dev_particle_generator'
import manual_radbolt_generator from './manual_radbolt_generator'
import radbolt_generator from './radbolt_generator'
import radbolt_lamp from './radbolt_lamp'
import uranium_centrifuge from './uranium_centrifuge'
import dev_radbolt_projector from './dev_radbolt_projector'
import radbolt_projector from './radbolt_projector'
import radbolt_connector from './radbolt_connector'

const radiation: BuildCategory = {
    id: 'radiation',
    name: '辐射',
    desc: '',
    icon: '☢',
    buildings: [
        particle_storage,
        research_reactor,
        dev_particle_generator,
        manual_radbolt_generator,
        radbolt_generator,
        radbolt_lamp,
        uranium_centrifuge,
        dev_radbolt_projector,
        radbolt_projector,
        radbolt_connector,
    ],
}

export default radiation

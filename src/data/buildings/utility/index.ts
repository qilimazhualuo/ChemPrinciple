import type { BuildCategory } from '../types'
import ice_machine from './ice_machine'
import oil_well from './oil_well'
import ore_scrubber from './ore_scrubber'
import sweepy_station from './sweepy_station'
import thermoregulator from './thermoregulator'
import ice_machine_2 from './ice_machine_2'
import dev_heater from './dev_heater'
import space_heater from './space_heater'
import liquid_heater from './liquid_heater'
import wood_stove from './wood_stove'
import thermal_block from './thermal_block'
import cold_fan from './cold_fan'
import liquid_thermoregulator from './liquid_thermoregulator'

const utility: BuildCategory = {
    id: 'utility',
    name: '实用',
    desc: '',
    icon: '⚙',
    buildings: [
        ice_machine,
        oil_well,
        ore_scrubber,
        sweepy_station,
        thermoregulator,
        ice_machine_2,
        dev_heater,
        space_heater,
        liquid_heater,
        wood_stove,
        thermal_block,
        cold_fan,
        liquid_thermoregulator,
    ],
}

export default utility
